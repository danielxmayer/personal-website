import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Daniel Mayer – Marketing & Media Manager',
  description: 'Marketingový a mediální manažer s 10+ lety praxe. TV Nova, Zonky, MAFRA.',
  openGraph: {
    title: 'Daniel Mayer – Marketing & Media Manager',
    description: 'Marketingový a mediální manažer s 10+ lety praxe. TV Nova, Zonky, MAFRA.',
    type: 'website',
    locale: 'cs_CZ',
    siteName: 'Daniel Mayer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Mayer – Marketing & Media Manager',
    description: 'Marketingový a mediální manažer s 10+ lety praxe. TV Nova, Zonky, MAFRA.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  )
}
