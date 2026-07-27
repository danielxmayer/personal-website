import type { Metadata } from 'next'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '../styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.danielmayer.space'),
  title: 'Daniel Mayer – Marketing & Media Manager',
  description: 'Marketingový a mediální manažer s více než 10 lety praxe. TV Nova, Zonky, MAFRA.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Daniel Mayer – Marketing & Media Manager',
    description: 'Marketingový a mediální manažer s více než 10 lety praxe. TV Nova, Zonky, MAFRA.',
    url: '/',
    type: 'website',
    locale: 'cs_CZ',
    siteName: 'Daniel Mayer',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Daniel Mayer – Marketing & Media Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Mayer – Marketing & Media Manager',
    description: 'Marketingový a mediální manažer s více než 10 lety praxe. TV Nova, Zonky, MAFRA.',
    images: ['/og.png'],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniel Mayer',
  url: 'https://www.danielmayer.space',
  image: 'https://www.danielmayer.space/og.png',
  jobTitle: 'Marketing & Media Manager',
  description:
    'Marketingový a mediální manažer s více než 10 lety praxe v řízení marketingových investic a mediálních strategií.',
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Česká zemědělská univerzita v Praze' },
    { '@type': 'CollegeOrUniversity', name: 'Humboldt-Universität zu Berlin' },
  ],
  knowsAbout: [
    'Mediální strategie',
    'Plánování a nákup médií',
    'Brand building',
    'Výkonový marketing',
    'Řízení marketingových investic',
  ],
  sameAs: ['https://www.linkedin.com/in/dama'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@900&family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&family=Playfair+Display:wght@900&family=Space+Grotesk:wght@700&family=Cormorant+Garamond:wght@700&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <SpeedInsights />

        <Script
          id="hubspot-tracking"
          src="https://js-eu1.hs-scripts.com/148454998.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
