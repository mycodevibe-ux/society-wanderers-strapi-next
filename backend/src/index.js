'use strict';
const path = require('path');
const fs = require('fs');

module.exports = {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }) {
    // 1. Auto-seed content and media if database is fresh/empty
    try {
      const seedPath = path.resolve(__dirname, '../data/seed-data.json');
      if (fs.existsSync(seedPath)) {
        let filesCount = 0;
        try {
          const filesCountResult = await strapi.db.connection('files').count('* as count');
          filesCount = parseInt(
            filesCountResult[0].count || filesCountResult[0]['count(*)'] || 0,
            10
          );
        } catch (e) {
          strapi.log.warn('Could not count files table:', e.message);
        }

        if (filesCount === 0) {
          strapi.log.info('Empty database detected. Starting automated seeding with complete content and media...');
          const seedData = JSON.parse(fs.readFileSync(seedPath, 'utf8'));

          const tableOrder = [
            'components_shared_stats',
            'components_shared_seos',
            'files',
            'services',
            'articles',
            'articles_cmps',
            'club_benefits',
            'social_feed_items',
            'navigation_items',
            'homepages',
            'about_pages',
            'services_pages',
            'journal_pages',
            'high_society_clubs',
            'homepages_cmps',
            'about_pages_cmps',
            'services_pages_cmps',
            'journal_pages_cmps',
            'high_society_clubs_cmps',
            'files_related_mph',
          ];

          // Clean up in reverse order to ensure clean slate
          for (const t of [...tableOrder].reverse()) {
            try {
              await strapi.db.connection(t).del();
            } catch (delErr) {
              // Ignore if table doesn't exist
            }
          }

          // Insert in dependency order
          for (const tableName of tableOrder) {
            const rows = seedData[tableName];
            if (!rows || rows.length === 0) continue;

            const preparedRows = rows.map((r) => {
              const row = { ...r };

              // Parse stringified JSON fields
              if (tableName === 'files') {
                if (typeof row.formats === 'string') {
                  try { row.formats = JSON.parse(row.formats); } catch (e) {}
                }
                if (typeof row.provider_metadata === 'string') {
                  try { row.provider_metadata = JSON.parse(row.provider_metadata); } catch (e) {}
                }
                if (typeof row.focal_point === 'string') {
                  try { row.focal_point = JSON.parse(row.focal_point); } catch (e) {}
                }
              }

              // Fix SQLite 0/1 booleans for PostgreSQL
              if (tableName === 'articles' && 'is_featured' in row) {
                row.is_featured = Boolean(row.is_featured);
              }
              if (tableName === 'navigation_items' && 'is_button' in row) {
                row.is_button = Boolean(row.is_button);
              }

              // Fix timestamp numbers for PostgreSQL
              ['created_at', 'updated_at', 'published_at'].forEach((f) => {
                if (typeof row[f] === 'number') {
                  row[f] = new Date(row[f]);
                }
              });

              return row;
            });

            const chunkSize = 30;
            for (let i = 0; i < preparedRows.length; i += chunkSize) {
              const chunk = preparedRows.slice(i, i + chunkSize);
              await strapi.db.connection(tableName).insert(chunk);
            }

            // Reset sequence if on PostgreSQL
            try {
              await strapi.db.connection.raw(
                `SELECT setval(pg_get_serial_sequence('"${tableName}"', 'id'), coalesce(max(id), 1)) FROM "${tableName}"`
              );
            } catch (seqErr) {
              // safe to ignore on SQLite or if no sequence
            }

            strapi.log.info(`✓ Seeded ${preparedRows.length} rows into ${tableName}`);
          }
          strapi.log.info('✓ Successfully seeded database with all media library files and relations!');
        } else {
          strapi.log.info(`Files table already has ${filesCount} records. Seeding skipped.`);
        }
      }
    } catch (seedErr) {
      strapi.log.error('Auto-seeding error:', seedErr);
    }

    // 2. Auto-configure Public API permissions on fresh database
    try {
      const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        const permissions = await strapi.query('plugin::users-permissions.permission').findMany({
          where: { role: publicRole.id },
        });

        const publicActions = [
          'api::service.service.find',
          'api::service.service.findOne',
          'api::article.article.find',
          'api::article.article.findOne',
          'api::club-benefit.club-benefit.find',
          'api::club-benefit.club-benefit.findOne',
          'api::social-feed-item.social-feed-item.find',
          'api::social-feed-item.social-feed-item.findOne',
          'api::navigation-item.navigation-item.find',
          'api::navigation-item.navigation-item.findOne',
          'api::homepage.homepage.find',
          'api::about-page.about-page.find',
          'api::services-page.services-page.find',
          'api::journal-page.journal-page.find',
          'api::high-society-club.high-society-club.find',
          'api::booking-inquiry.booking-inquiry.create',
          'api::membership-inquiry.membership-inquiry.create',
        ];

        for (const action of publicActions) {
          const exists = permissions.some((p) => p.action === action);
          if (!exists) {
            await strapi.query('plugin::users-permissions.permission').create({
              data: {
                action,
                role: publicRole.id,
              },
            });
          }
        }
        strapi.log.info('✓ Public API permissions configured successfully.');
      }
    } catch (err) {
      strapi.log.warn('Auto-permission bootstrap note:', err.message);
    }
  },
};
