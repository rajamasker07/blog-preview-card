import type { Metadata } from 'next'
import './globals.css'
import { figtre } from './ui/font/fonts'

export const metadata: Metadata = {
  title: 'Frontend Mentor',
  description: 'Blog preview card',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${figtre.className} bg-custom-yellow `}>{children}</body>
    </html>
  )
}
