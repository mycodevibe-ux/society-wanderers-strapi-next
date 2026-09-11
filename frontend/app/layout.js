import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B1527',
};

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'HSW Global — Private Travel Advisory',
    template: '%s | HSW Global'
  },
  description: 'Private Travel Advisory for the Exceptionally Well Traveled. Luxury concierge travel services, bespoke itineraries, and exclusive experiences.',
  keywords: 'luxury travel, private travel advisory, bespoke travel, concierge travel, HSW Global, High Society Wanderers',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    title: 'HSW Global — Private Travel Advisory for the Exceptionally Well Traveled',
    description: 'Private Travel Advisory for the Exceptionally Well Traveled. Curated villas, superyacht charters, and sovereign enclaves.',
    url: 'https://hswglobal.com',
    siteName: 'HSW Global',
    images: [
      {
        url: '/images/share-card.jpg',
        width: 1200,
        height: 630,
        alt: 'HSW Global — Private Travel Advisory',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HSW Global — Private Travel Advisory',
    description: 'Private Travel Advisory for the Exceptionally Well Traveled.',
    images: ['/images/share-card.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
