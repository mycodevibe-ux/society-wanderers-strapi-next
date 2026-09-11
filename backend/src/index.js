'use strict';

module.exports = {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }) {
    try {
      // 1. Auto-configure Public API permissions on fresh database
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
