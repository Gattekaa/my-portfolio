//NextJS
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'

// Contexts
import LanguageProvider from '@/contexts/languageContext'

// Styles
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinicius Gabriel - Portfolio',
  description: 'Vinicius Gabriel fullstack developer portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookiesNext = cookies()
  const lang = cookiesNext?.get('lang')?.value || 'en'

  return (
    <html lang="en">
      <LanguageProvider lang={lang}>
        <body className={inter.className}>{children}</body>
      </LanguageProvider>
    </html>
  )
}
