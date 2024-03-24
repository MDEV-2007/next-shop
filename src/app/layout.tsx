import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const montserrat = Montserrat({ subsets: ['latin'],display:'swap' })

export const metadata: Metadata = {
  title: 'Ecco Systems',
  description: 'Create this app By MDEV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  )
}
