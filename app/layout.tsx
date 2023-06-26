import './globals.css'
import { Monoton } from 'next/font/google'

const monoton = Monoton({ subsets: ['latin'], weight: ['400'] })

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
      <body className={`${monoton.className}`}>{children}</body>
    </html>
  )
}
