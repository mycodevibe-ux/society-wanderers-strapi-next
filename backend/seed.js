const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, '.tmp', 'data.db');
const db = new Database(dbPath);

function genDocId() {
  return Math.random().toString(36).substring(2, 14) + Math.random().toString(36).substring(2, 14);
}

const now = new Date().toISOString();

console.log('>>> Seeding Strapi Database...');

db.transaction(() => {
  // 1. SERVICES
  db.prepare('DELETE FROM services').run();
  const insertService = db.prepare(`
    INSERT INTO services (document_id, title, number, slug, description, "order", created_at, updated_at, published_at, locale)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const services = [
    { title: 'Hotels, Resorts & Private Villas', number: '01', slug: 'hotels-resorts-private-villas', description: 'From private cliffside compounds in Amalfi to centuries-old palazzos on Lake Como and private Caribbean cay buyouts, our advisory unlocks sanctuary residences that never appear on open market indexes.', order: 1 },
    { title: 'Cruises, Sailing & Private Charters', number: '02', slug: 'cruises-sailing-private-charters', description: 'Navigating the Mediterranean, Caribbean, and polar corridors with complete sovereignty. We orchestrate private mega-yacht charters, catamarans, and suites aboard the world’s most refined boutique cruise lines.', order: 2 },
    { title: 'Weddings & Honeymoons', number: '03', slug: 'weddings-honeymoons', description: 'Designing milestone romantic celebrations in the world’s most breathtaking settings—from historic French châteaux to private Polynesian atolls.', order: 3 },
    { title: 'Corporate Travel & Executive Retreats', number: '04', slug: 'corporate-travel', description: 'Executive itineraries designed for leaders who value punctuality, absolute discretion, and environments engineered for strategic clarity.', order: 4 },
    { title: 'Commercial & Private Flights', number: '05', slug: 'commercial-private-flights', description: 'Air travel elevated to pure serenity. We curate private jet charters, helicopter transfers, and commercial first-class corridors with direct tarmac escorts.', order: 5 },
    { title: 'Art, Culinary & Cultural Tours', number: '06', slug: 'art-culinary-cultural-tours', description: 'Transcending ordinary tourism to forge intimate connections with cultural guardians, master artisans, and legendary kitchens.', order: 6 },
    { title: 'Private Transfers & Chauffeur Services', number: '07', slug: 'private-transfers', description: 'From runway tarmac to hotel portico, experience smooth, secure ground transit in pristine motorcars driven by career chauffeurs.', order: 7 },
    { title: 'Iconic & Private Rail Journeys', number: '08', slug: 'rail-journeys', description: 'Relive the romance of vintage train travel with private Grand Suites aboard the Venice Simplon-Orient-Express, Royal Scotsman, and Andean Explorer.', order: 8 },
  ];

  services.forEach(s => {
    insertService.run(genDocId(), s.title, s.number, s.slug, s.description, s.order, now, now, now, 'en');
  });
  console.log(`✓ Inserted ${services.length} services`);

  // 2. ARTICLES
  db.prepare('DELETE FROM articles').run();
  const insertArticle = db.prepare(`
    INSERT INTO articles (document_id, title, slug, excerpt, content, category, tags, published_date, is_featured, created_at, updated_at, published_at, locale)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const articles = [
    {
      title: 'The Psychology Behind Modern Luxury Travel',
      slug: 'psychology-behind-modern-luxury-travel',
      excerpt: 'Why today’s discerning travelers are shifting away from conspicuous opulence toward radical seclusion, emotional restoration, and unrecorded moments.',
      content: 'In an era of hyper-visibility, true luxury has become quiet. Connoisseurs no longer seek crowded grand hotels or recognizable designer interiors; rather, the ultimate privilege is time unrecorded, silence, and total sovereign privacy.',
      category: 'CULTURAL INTEL',
      tags: 'Philosophy, Seclusion, Modern Travel',
      published_date: '2026-04-12',
      is_featured: 1
    },
    {
      title: 'The New Standard Of Corporate Retreats',
      slug: 'the-new-standard-of-corporate-retreats',
      excerpt: 'How top-tier leadership summits and family office boards are replacing standard conference hotels with whole-castle buyouts and high-alpine sanctuaries.',
      content: 'When strategy requires absolute clarity, the physical environment dictates the outcome. We explore how private Swiss chalets and Scottish baronial estates stimulate bold executive thinking.',
      category: 'EXECUTIVE',
      tags: 'Governance, Leadership, Retreats',
      published_date: '2026-04-05',
      is_featured: 0
    },
    {
      title: 'Where The Wealthy Are Traveling This Summer',
      slug: 'where-the-wealthy-are-traveling-this-summer',
      excerpt: 'From private atoll buyouts in French Polynesia to unlisted deep-water anchorages in the Maddalena Archipelago.',
      content: 'A confidential overview of summer migratory patterns among global families: avoiding commercial tourist corridors in favor of tender-only cantinas and private island preserves.',
      category: 'SEASONAL INTELLIGENCE',
      tags: 'Mediterranean, Caribbean, Summer 2026',
      published_date: '2026-03-28',
      is_featured: 0
    },
    {
      title: 'Paris: The Discreet Haute-Vivant Address Book',
      slug: 'paris-haute-vivant',
      excerpt: 'Private art salons along Quai Voltaire, appointment-only jeweler ateliers on Place Vendôme, and clandestine speakeasies.',
      content: 'The true elegance of Paris is rarely visible from street level. It exists in the hushed interior courtyards of the Faubourg Saint-Germain, inside private apartment salons overlooking the Seine.',
      category: 'CITY INTEL',
      tags: 'Paris, Secret Addresses, Art Salons',
      published_date: '2026-03-15',
      is_featured: 1
    },
    {
      title: 'Costa Smeralda & Corsica: The Superyacht Anchorage Dossier',
      slug: 'costa-smeralda-yachting',
      excerpt: 'Navigating the Maddalena Archipelago, securing unlisted deep-water anchorages, and stepping ashore to clandestine cantinas.',
      content: 'The waters between Northeast Sardinia and Southern Corsica represent the pinnacle of European yachting—where granite cliffs carved by the mistral shelter turquoise lagoons inaccessible to all but private tenders.',
      category: 'COASTAL & ISLAND',
      tags: 'Superyachts, Sardinia, Corsica',
      published_date: '2026-03-01',
      is_featured: 0
    },
    {
      title: 'Old-Money Sanctums: The Storied Country Estates of the UK',
      slug: 'old-money-uk-estates',
      excerpt: 'Private grouse estates, walled gardens, ancestral castle takeovers, and library salons across Oxfordshire and Scotland.',
      content: 'Behind centuries-old drystone walls and towering wrought-iron gates lies Britain’s most enduring luxury: ancestral land managed with quiet stewardship, roaring log fires, and immaculate country hospitality.',
      category: 'ALPINE & ESTATES',
      tags: 'Cotswolds, Scottish Highlands, Lineage',
      published_date: '2026-02-20',
      is_featured: 0
    },
    {
      title: 'The Grand Alpine Enclaves: St. Moritz, Gstaad & Zermatt',
      slug: 'grand-alpine-enclaves',
      excerpt: 'Glacier corridors, private cigar salons, exclusive ski chalets, and torchlit night runs high above the clouds.',
      content: 'High altitude glamour at its most refined. St. Moritz, Gstaad, and Zermatt remain the quintessential winter playgrounds for European royalty, industrialists, and connoisseurs of crisp mountain air.',
      category: 'ALPINE & ESTATES',
      tags: 'Swiss Alps, St. Moritz, Gstaad',
      published_date: '2026-02-10',
      is_featured: 0
    },
    {
      title: 'Kyoto: Zen Quarters, Master Artisans & Living Treasures',
      slug: 'kyoto-zen-artisans',
      excerpt: 'After-hours meditation in ancient Zen temples, multi-generational kaiseki lineages, and private tea master introductions.',
      content: 'Behind simple cedar lattice facades in Gion and Higashiyama lies an exquisitely disciplined aesthetic world. Beauty is measured not by extravagance, but by proportion and seasonal mindfulness.',
      category: 'CITY INTEL',
      tags: 'Japan, Kyoto, Living Treasures',
      published_date: '2026-01-25',
      is_featured: 0
    }
  ];

  articles.forEach(a => {
    insertArticle.run(genDocId(), a.title, a.slug, a.excerpt, a.content, a.category, a.tags, a.published_date, a.is_featured, now, now, now, 'en');
  });
  console.log(`✓ Inserted ${articles.length} articles`);

  // 3. CLUB BENEFITS
  db.prepare('DELETE FROM club_benefits').run();
  const insertBenefit = db.prepare(`
    INSERT INTO club_benefits (document_id, title, description, "order", created_at, updated_at, published_at, locale)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const benefits = [
    { title: 'Guaranteed Unlisted Privileges', description: 'Priority access to private island buyouts, 16th-century Tuscan borghi, and discreet clifftop compounds that never appear on open market indexes.', order: 1 },
    { title: 'Dedicated 24/7 Concierge Corps', description: 'Direct private line with senior travel designers and dispatch coordinators who maintain sub-5-minute responsiveness transcontinentally.', order: 2 },
    { title: 'Superyacht & Ramp-Side Aviation', description: 'Guaranteed mooring in high-demand regatta ports (Saint-Tropez, Monaco, Gustavia) and tarmac transfers directly to aircraft stairs.', order: 3 },
    { title: 'Living Treasures & Curated Salons', description: 'Private viewings in world-renowned galleries after hours, introductions to Living National Treasures, and private dining inside historic family cellars.', order: 4 },
    { title: 'Confidential Family Office Governance', description: 'Tailored travel logistics for multi-generational families, complete security detail integration, and private luggage forwarding.', order: 5 }
  ];

  benefits.forEach(b => {
    insertBenefit.run(genDocId(), b.title, b.description, b.order, now, now, now, 'en');
  });
  console.log(`✓ Inserted ${benefits.length} club benefits`);

  // 4. SOCIAL FEED ITEMS
  db.prepare('DELETE FROM social_feed_items').run();
  const insertSocial = db.prepare(`
    INSERT INTO social_feed_items (document_id, caption, instagram_url, "order", created_at, updated_at, published_at, locale)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const socials = [
    { caption: 'Travel Guide: Paris, France — Private Salons of Place Vendôme', instagram_url: 'https://instagram.com', order: 1 },
    { caption: 'Sardinia & Corsica: The Superyacht Anchorage Dossier', instagram_url: 'https://instagram.com', order: 2 },
    { caption: 'Storied Old Money Hotels & English Country Manors', instagram_url: 'https://instagram.com', order: 3 },
    { caption: 'Lake Como: Waterfront Palazzos & The Art of Villeggiatura', instagram_url: 'https://instagram.com', order: 4 },
    { caption: 'Ancestral Castle Estates: The Scottish Highlands', instagram_url: 'https://instagram.com', order: 5 }
  ];

  socials.forEach(s => {
    insertSocial.run(genDocId(), s.caption, s.instagram_url, s.order, now, now, now, 'en');
  });
  console.log(`✓ Inserted ${socials.length} social feed items`);

  // 5. NAVIGATION ITEMS
  db.prepare('DELETE FROM navigation_items').run();
  const insertNav = db.prepare(`
    INSERT INTO navigation_items (document_id, label, url, "order", is_button, created_at, updated_at, published_at, locale)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const navs = [
    { label: 'DESTINATIONS', url: '/destinations', order: 1, is_button: 0 },
    { label: 'SERVICES', url: '/services', order: 2, is_button: 0 },
    { label: 'JOURNAL', url: '/journal', order: 3, is_button: 0 },
    { label: 'GUIDES', url: '/guides', order: 4, is_button: 0 },
    { label: 'HIGH SOCIETY CLUB', url: '/high-society-club', order: 5, is_button: 0 },
    { label: 'ABOUT', url: '/about', order: 6, is_button: 0 },
    { label: 'CONTACT', url: '/contact', order: 7, is_button: 0 },
    { label: 'BEGIN YOUR JOURNEY', url: '/begin-your-journey', order: 8, is_button: 1 }
  ];

  navs.forEach(n => {
    insertNav.run(genDocId(), n.label, n.url, n.order, n.is_button, now, now, now, 'en');
  });
  console.log(`✓ Inserted ${navs.length} navigation items`);

  // 6. HOMEPAGE
  db.prepare('DELETE FROM homepages').run();
  db.prepare(`
    INSERT INTO homepages (
      document_id, hero_title, hero_subtitle, signature_service_title, club_section_title,
      club_description, testimonial_quote, testimonial_author, testimonial_role,
      journal_section_title, social_feed_title, created_at, updated_at, published_at, locale
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    genDocId(),
    'HSW GLOBAL',
    'Private Travel Advisory for the Exceptionally Well Traveled',
    'SIGNATURE SERVICE',
    'THE HIGH SOCIETY CLUB',
    'A confidential, invitation-only syndicate of global connoisseurs, family offices, and distinguished travelers seeking unrestricted access to unlisted properties, private aviation corridors, and sovereign enclaves.',
    'Working With Loren At HSW Global Made This Trip Completely Seamless From Start To Finish. Every Detail Was Thoughtfully Planned, Allowing Us To Fully Relax And Enjoy The Experience Without Any Stress.',
    'Lazarena A.',
    'Private Client',
    'THE JOURNAL',
    'SOCIAL FEED',
    now, now, now, 'en'
  );
  console.log('✓ Inserted Homepage');

  // 7. ABOUT PAGE
  db.prepare('DELETE FROM about_pages').run();
  db.prepare(`
    INSERT INTO about_pages (
      document_id, hero_title, hero_subtitle, founder_name, founder_story,
      travel_style_title, travel_style_text, quote, quote_attribution,
      created_at, updated_at, published_at, locale
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    genDocId(),
    'THE PURSUIT OF EFFORTLESS LUXURY',
    'Founded on the belief that true luxury is not excess, but the absolute eradication of friction.',
    'Loren Buckles',
    'With decades of experience spanning classical archaeology, European history, and confidential family office travel curation, Loren Buckles established High Society Wanderers to provide distinguished travelers with an advisory standard that transcends conventional commercial agencies.',
    'THE ADVISORY STANDARD',
    'We operate as personal travel trustees. Every journey is engineered from first principles—vetting captains, securing closed-door viewings, and guaranteeing that our clients are recognized as dignitaries at the world’s most guarded gates.',
    'True privilege is invisible. It is the door that opens before you arrive, the table held without reservation, and the serene certainty that every contingency has been anticipated.',
    'HSW Global Founding Doctrine',
    now, now, now, 'en'
  );
  console.log('✓ Inserted About Page');

  // 8. SERVICES PAGE
  db.prepare('DELETE FROM services_pages').run();
  db.prepare(`
    INSERT INTO services_pages (document_id, hero_title, hero_subtitle, created_at, updated_at, published_at, locale)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    genDocId(),
    'WANDER BEAUTIFULLY',
    'Eight bespoke disciplines engineered to fulfill the requirements of the world’s most exacting travelers.',
    now, now, now, 'en'
  );
  console.log('✓ Inserted Services Page');

  // 9. JOURNAL PAGE
  db.prepare('DELETE FROM journal_pages').run();
  db.prepare(`
    INSERT INTO journal_pages (document_id, hero_title, hero_subtitle, created_at, updated_at, published_at, locale)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    genDocId(),
    'THE JOURNAL',
    'Dispatches, Cultural Critiques, and Discerning Travel Notes from our Global Bureaus.',
    now, now, now, 'en'
  );
  console.log('✓ Inserted Journal Page');

  // 10. HIGH SOCIETY CLUB
  db.prepare('DELETE FROM high_society_clubs').run();
  db.prepare(`
    INSERT INTO high_society_clubs (
      document_id, hero_title, hero_subtitle, intro_heading, intro_text,
      membership_cta_title, membership_cta_text, membership_cta_button,
      created_at, updated_at, published_at, locale
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    genDocId(),
    'THE HIGH SOCIETY CLUB',
    'An Invitation-Only Syndicate of Connoisseurs, Collectors, and World Travelers.',
    'SOVEREIGN LEISURE UNLOCKED',
    'Membership grants round-the-clock liaison with senior partners, priority booking of our private yacht fleet, and access to private estate buyouts that never enter the public domain.',
    'REQUEST CONSIDERATION',
    'Membership is strictly capped to preserve the integrity of our relationships and the absolute availability of our advisory team.',
    'APPLY FOR MEMBERSHIP',
    now, now, now, 'en'
  );
  console.log('✓ Inserted High Society Club');
  // 11. FILES AND MEDIA POPULATION
  const uploadsDir = path.join(__dirname, 'public', 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  function getImageSize(filePath) {
    const buf = fs.readFileSync(filePath);
    if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
      return {
        width: buf.readUInt32BE(16),
        height: buf.readUInt32BE(20),
        mime: 'image/png'
      };
    }
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      let offset = 2;
      while (offset < buf.length) {
        if (buf[offset] !== 0xff) break;
        const marker = buf[offset + 1];
        if (marker === 0xc0 || marker === 0xc2) {
          return {
            height: buf.readUInt16BE(offset + 5),
            width: buf.readUInt16BE(offset + 7),
            mime: 'image/jpeg'
          };
        }
        const length = buf.readUInt16BE(offset + 2);
        offset += 2 + length;
      }
      return { width: 1920, height: 1080, mime: 'image/jpeg' };
    }
    return { width: 1920, height: 1080, mime: 'image/png' };
  }

  const clearTables = [
    'files_related_mph',
    'files',
    'components_shared_stats',
    'components_shared_seos',
    'homepages_cmps',
    'about_pages_cmps',
    'services_pages_cmps',
    'journal_pages_cmps',
    'high_society_clubs_cmps',
    'articles_cmps'
  ];

  for (const tbl of clearTables) {
    db.prepare(`DELETE FROM ${tbl}`).run();
  }

  const insertFile = db.prepare(`
    INSERT INTO files (
      document_id, name, alternative_text, caption, width, height, formats, hash,
      ext, mime, size, url, provider, folder_path, created_at, updated_at, published_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertMph = db.prepare(`
    INSERT INTO files_related_mph (file_id, related_id, related_type, field, "order")
    VALUES (?, ?, ?, ?, ?)
  `);

  const insertStat = db.prepare(`
    INSERT INTO components_shared_stats (value, label) VALUES (?, ?)
  `);

  const insertSeo = db.prepare(`
    INSERT INTO components_shared_seos (meta_title, meta_description) VALUES (?, ?)
  `);

  const fileMap = new Map();

  function getOrRegisterFile(srcFileName, customDestName, altText = '', caption = '') {
    const destName = customDestName || srcFileName.replace(/\s+/g, '_');
    if (fileMap.has(destName)) {
      return fileMap.get(destName);
    }

    const srcPath = path.resolve(__dirname, '../frontend/public/images', srcFileName);
    if (!fs.existsSync(srcPath)) {
      return null;
    }

    const destPath = path.join(uploadsDir, destName);
    fs.copyFileSync(srcPath, destPath);

    const stats = fs.statSync(destPath);
    const dims = getImageSize(destPath);
    const parsed = path.parse(destName);
    const docId = genDocId();

    const formats = JSON.stringify({
      thumbnail: {
        name: `thumbnail_${destName}`,
        hash: `thumbnail_${parsed.name}`,
        ext: parsed.ext,
        mime: dims.mime,
        width: Math.min(dims.width, 245),
        height: Math.min(dims.height, 156),
        size: parseFloat((stats.size / 1024).toFixed(2)),
        url: `/uploads/${destName}`
      }
    });

    const res = insertFile.run(
      docId,
      srcFileName,
      altText || srcFileName,
      caption || altText || srcFileName,
      dims.width,
      dims.height,
      formats,
      parsed.name,
      parsed.ext,
      dims.mime,
      parseFloat((stats.size / 1024).toFixed(2)),
      `/uploads/${destName}`,
      'local',
      '/',
      now,
      now,
      now
    );

    const fileId = res.lastInsertRowid;
    fileMap.set(destName, fileId);
    return fileId;
  }

  function linkMedia(fileId, relatedId, relatedType, field, order = 1) {
    if (!fileId) return;
    insertMph.run(fileId, relatedId, relatedType, field, order);
  }

  function addStat(tableCmps, entityId, value, label, order) {
    const statRes = insertStat.run(value, label);
    db.prepare(`
      INSERT INTO ${tableCmps} (entity_id, cmp_id, component_type, field, "order")
      VALUES (?, ?, 'shared.stat', 'stats', ?)
    `).run(entityId, statRes.lastInsertRowid, order);
  }

  function addSeo(tableCmps, entityId, metaTitle, metaDescription, order = 1) {
    const seoRes = insertSeo.run(metaTitle, metaDescription);
    db.prepare(`
      INSERT INTO ${tableCmps} (entity_id, cmp_id, component_type, field, "order")
      VALUES (?, ?, 'shared.seo', 'seo', ?)
    `).run(entityId, seoRes.lastInsertRowid, order);
  }

  // 11.1 Homepage media & components
  const hpId = db.prepare('SELECT id FROM homepages LIMIT 1').get().id;
  const heroFileId = getOrRegisterFile('banner.png', 'banner.png', 'HSW Global Hero Banner');
  linkMedia(heroFileId, hpId, 'api::homepage.homepage', 'heroImage', 1);

  const avatarFileId = getOrRegisterFile('Ellipse 97.png', 'ellipse_avatar.png', 'Client Testimonial Avatar');
  linkMedia(avatarFileId, hpId, 'api::homepage.homepage', 'testimonialAvatar', 1);

  addStat('homepages_cmps', hpId, '24/7', 'CONCIERGE', 1);
  addStat('homepages_cmps', hpId, '120+', 'DESTINATIONS', 2);
  addStat('homepages_cmps', hpId, '1:1', 'TRIP DESIGNER', 3);
  addStat('homepages_cmps', hpId, 'No', 'COMPROMISE', 4);

  addSeo(
    'homepages_cmps',
    hpId,
    'HSW Global — Private Travel Advisory for the Exceptionally Well Traveled',
    'Private Travel Advisory for the Exceptionally Well Traveled. Bespoke luxury travel experiences, concierge services, and exclusive membership.'
  );

  // 11.2 About Page media & components
  const aboutId = db.prepare('SELECT id FROM about_pages LIMIT 1').get().id;
  const aboutBannerId = getOrRegisterFile('aboutBanner.png', 'about_banner.png', 'About HSW Global Banner');
  linkMedia(aboutBannerId, aboutId, 'api::about-page.about-page', 'heroImage', 1);

  const founderImgId = getOrRegisterFile('aboutLeft.png', 'about_left.png', 'Loren Buckles, Founder');
  linkMedia(founderImgId, aboutId, 'api::about-page.about-page', 'founderImage', 1);

  const travelStyleImgId = getOrRegisterFile('aboutR.png', 'about_right.png', 'Travel Style & Curated Experiences');
  linkMedia(travelStyleImgId, aboutId, 'api::about-page.about-page', 'travelStyleImage', 1);

  const panoramaImgId = getOrRegisterFile('about.png', 'about_panorama.png', 'Luxury Enclave Panorama');
  linkMedia(panoramaImgId, aboutId, 'api::about-page.about-page', 'panoramaImage', 1);

  addStat('about_pages_cmps', aboutId, '24/7', 'CONCIERGE', 1);
  addStat('about_pages_cmps', aboutId, '120+', 'DESTINATIONS', 2);
  addStat('about_pages_cmps', aboutId, '1:1', 'TRIP DESIGNER', 3);
  addStat('about_pages_cmps', aboutId, 'No', 'COMPROMISE', 4);

  addSeo(
    'about_pages_cmps',
    aboutId,
    'About — HSW Global | Loren Buckles, Founder',
    'Meet Loren Buckles, founder of HSW Global. A private travel advisory built on a simple conviction: the most demanding travelers deserve a single, trusted hand.'
  );

  // 11.3 Services Page media & components
  const servicesPageId = db.prepare('SELECT id FROM services_pages LIMIT 1').get().id;
  const servicesBannerId = getOrRegisterFile('services.png', 'services_banner.png', 'Services Banner');
  linkMedia(servicesBannerId, servicesPageId, 'api::services-page.services-page', 'heroImage', 1);

  addSeo(
    'services_pages_cmps',
    servicesPageId,
    'Services — HSW Global | Luxury Travel Services',
    'Explore our signature travel services — from luxury hotels and private villas to yacht charters, private flights, weddings, and curated cultural experiences.'
  );

  // 11.4 Journal Page media & components
  const journalPageId = db.prepare('SELECT id FROM journal_pages LIMIT 1').get().id;
  const journalBannerId = getOrRegisterFile('banner2.png', 'journal_banner.png', 'The Journal Banner');
  linkMedia(journalBannerId, journalPageId, 'api::journal-page.journal-page', 'heroImage', 1);

  addSeo(
    'journal_pages_cmps',
    journalPageId,
    'The Journal — HSW Global | Travel Essays & Guides',
    'Essays, field notes, and quiet recommendations written for the well traveled. Explore luxury travel insights from HSW Global.'
  );

  // 11.5 High Society Club media & components
  const clubId = db.prepare('SELECT id FROM high_society_clubs LIMIT 1').get().id;
  const clubBannerId = getOrRegisterFile('club.png', 'club_banner.png', 'High Society Club Banner');
  linkMedia(clubBannerId, clubId, 'api::high-society-club.high-society-club', 'heroImage', 1);

  const memberImgId = getOrRegisterFile('membership.png', 'membership_cta.png', 'Membership Consideration');
  linkMedia(memberImgId, clubId, 'api::high-society-club.high-society-club', 'membershipImage', 1);

  addSeo(
    'high_society_clubs_cmps',
    clubId,
    'The High Society Club — HSW Global | Private Travel Membership',
    'A private travel collective for those who understand that time is their most valuable asset. Discover exclusive membership benefits.'
  );

  // 11.6 Services Images (8 items)
  const serviceImages = ['a1.png', 'a2.png', 'a3.png', 'a4.png', 'a5.png', 'a6.png', 'a7.png', 'a8.png'];
  const allServices = db.prepare('SELECT id, number, title FROM services ORDER BY "order" ASC').all();
  allServices.forEach((srv, idx) => {
    const imgName = serviceImages[idx] || 'services.png';
    const fId = getOrRegisterFile(imgName, imgName, srv.title);
    linkMedia(fId, srv.id, 'api::service.service', 'image', 1);
  });

  // 11.7 Articles Cover Images & SEO (8 items)
  const articleImages = [
    { file: 'dest_como.jpg', title: 'Lake Como Villa' },
    { file: 'dest_stmoritz.jpg', title: 'St. Moritz Alpine Retreat' },
    { file: 'dest_riviera.jpg', title: 'French Riviera' },
    { file: 'dest_kyoto.jpg', title: 'Kyoto Zen Sanctuary' },
    { file: 'dest_amalfi.jpg', title: 'Amalfi Coast Compound' },
    { file: 'dest_cotswolds.jpg', title: 'Cotswolds Manor' },
    { file: 'dest_highlands.jpg', title: 'Scottish Highlands Castle' },
    { file: 'dest_borabora.jpg', title: 'Bora Bora Overwater Sanctuary' },
  ];

  const allArticles = db.prepare('SELECT id, title, excerpt FROM articles ORDER BY id ASC').all();
  allArticles.forEach((art, idx) => {
    const imgInfo = articleImages[idx] || { file: 'banner.png', title: art.title };
    const fId = getOrRegisterFile(imgInfo.file, imgInfo.file, imgInfo.title);
    linkMedia(fId, art.id, 'api::article.article', 'coverImage', 1);

    addSeo(
      'articles_cmps',
      art.id,
      `${art.title} | HSW GLOBAL Journal`,
      art.excerpt ? art.excerpt.substring(0, 155) : 'HSW Global Journal travel intelligence.'
    );
  });

  // 11.8 Social Feed Images (5 items)
  const socialImages = ['social1.png', 'social2.png', 'social3.png', 'social4.png', 'social5.png'];
  const allSocials = db.prepare('SELECT id, caption FROM social_feed_items ORDER BY "order" ASC').all();
  allSocials.forEach((soc, idx) => {
    const sImg = socialImages[idx] || 'social1.png';
    const fId = getOrRegisterFile(sImg, sImg, soc.caption);
    linkMedia(fId, soc.id, 'api::social-feed-item.social-feed-item', 'image', 1);
  });
})();

console.log('>>> Strapi database successfully populated with all content, media files, and components!');

