import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Daniel Mayer – Marketing & Media Manager',
  description: 'Marketingový a mediální manažer s více než 10 lety praxe. TV Nova, Zonky, MAFRA.',
  openGraph: {
    title: 'Daniel Mayer – Marketing & Media Manager',
    description: 'Marketingový a mediální manažer s více než 10 lety praxe. TV Nova, Zonky, MAFRA.',
    type: 'website',
    locale: 'cs_CZ',
    siteName: 'Daniel Mayer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@900&family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&family=Playfair+Display:wght@900&family=Space+Grotesk:wght@700&family=Cormorant+Garamond:wght@700&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
