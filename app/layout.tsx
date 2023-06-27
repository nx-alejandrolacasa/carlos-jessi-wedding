import { Sacramento as Font } from 'next/font/google'
import './globals.css'

const fontFamily = Font({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Carlos & Jessi',
  description: 'Boda Carlos & Jessi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${fontFamily.className} text-white`}>{children}</body>
    </html>
  )
}
