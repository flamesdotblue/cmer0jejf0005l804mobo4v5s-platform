import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Axiom — Futuristic Tech Reinvented',
  description: 'Modern tech solutions with immersive 3D interactions. Built for the next era.',
  openGraph: {
    title: 'Axiom — Futuristic Tech Reinvented',
    description: 'Modern tech solutions with immersive 3D interactions. Built for the next era.',
    url: 'https://example.com',
    siteName: 'Axiom',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Axiom — Futuristic Tech Reinvented'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axiom — Futuristic Tech Reinvented',
    description: 'Modern tech solutions with immersive 3D interactions.'
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
