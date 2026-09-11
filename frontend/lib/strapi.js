const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

/**
 * Fetch data from Strapi REST API
 * @param {string} path - API path (e.g., '/homepage')
 * @param {object} params - Query parameters
 * @param {object} options - Fetch options
 */
export async function fetchAPI(path, params = {}, options = {}) {
  const url = new URL(`/api${path}`, STRAPI_URL);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  });

  const defaultOptions = {
    next: { revalidate: 60 },
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await fetch(url.toString(), { ...defaultOptions, ...options });
    
    if (!res.ok) {
      console.error(`Strapi API error: ${res.status} ${res.statusText} for ${url.toString()}`);
      return null;
    }
    
    return res.json();
  } catch (error) {
    console.error(`Failed to fetch from Strapi: ${error.message}`);
    return null;
  }
}

/**
 * POST data to Strapi REST API (for form submissions)
 */
export async function postAPI(path, data) {
  const url = new URL(`/api${path}`, STRAPI_URL);

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData?.error?.message || `Submission failed: ${res.status}`);
  }

  return res.json();
}

/**
 * Get full media URL from Strapi
 */
export function getStrapiMedia(media, fallback = '/images/share-card.jpg') {
  if (!media) return fallback;
  
  const { url } = media?.data?.attributes || media?.attributes || media || {};
  if (!url) return fallback;
  
  if (url.startsWith('http') || url.startsWith('//')) return url;
  return `${STRAPI_URL}${url}`;
}

/**
 * Get image attributes from Strapi media
 */
export function getStrapiImageProps(media, fallback = '/images/share-card.jpg') {
  const url = getStrapiMedia(media, fallback);
  if (!url) return null;
  
  const attrs = media?.data?.attributes || media?.attributes || media || {};
  
  return {
    src: url,
    alt: attrs.alternativeText || attrs.name || 'High Society Wanderers',
    width: attrs.width || 1200,
    height: attrs.height || 800,
  };
}

/* ----- Convenience fetchers for each content type ----- */

export async function getHomepage() {
  return fetchAPI('/homepage', { 'populate': 'deep' });
}

export async function getAboutPage() {
  return fetchAPI('/about-page', { 'populate': 'deep' });
}

export async function getServicesPage() {
  return fetchAPI('/services-page', { 'populate': 'deep' });
}

export async function getHighSocietyClub() {
  return fetchAPI('/high-society-club', { 'populate': 'deep' });
}

export async function getJournalPage() {
  return fetchAPI('/journal-page', { 'populate': 'deep' });
}

export async function getServices() {
  return fetchAPI('/services', { 'populate': '*', 'sort': 'order:asc' });
}

export async function getArticles(page = 1, pageSize = 6) {
  return fetchAPI('/articles', {
    'populate': '*',
    'sort': 'publishedDate:desc',
    'pagination[page]': String(page),
    'pagination[pageSize]': String(pageSize),
  });
}

export async function getArticleBySlug(slug) {
  return fetchAPI('/articles', {
    'populate': 'deep',
    'filters[slug][$eq]': slug,
  });
}

export async function getFeaturedArticle() {
  return fetchAPI('/articles', {
    'populate': '*',
    'filters[isFeatured][$eq]': 'true',
    'pagination[limit]': '1',
  });
}

export async function getClubBenefits() {
  return fetchAPI('/club-benefits', { 'populate': '*', 'sort': 'order:asc' });
}

export async function getSocialFeedItems() {
  return fetchAPI('/social-feed-items', { 'populate': '*', 'sort': 'order:asc' });
}

export async function getNavigationItems() {
  return fetchAPI('/navigation-items', { 'sort': 'order:asc' });
}

export async function submitBookingInquiry(data) {
  return postAPI('/booking-inquiries', data);
}

export async function submitMembershipInquiry(data) {
  return postAPI('/membership-inquiries', data);
}
