import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import './/globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Forums',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn(
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}>
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
       <Navbar/>
          <div className='container max-w-7xl mx-auto h-full pt-12'>
            {children}
          </div>
      </body>
    </html>
  )
}
