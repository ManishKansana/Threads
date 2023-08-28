import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/shared/TopBar'
import LeftSideBar from '@/components/shared/LeftSideBar'
import RightSideBar from '@/components/shared/RightSideBar'
import BottomBar from '@/components/shared/BottomBar'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threadz',
  description: 'A NEXT.js 13 Based Threads Application Clone.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <main>
          <LeftSideBar />
          <section className='main-container'>
            <div className='w-full max-w-4x1'>
            {children}
            </div>
          </section>
          <RightSideBar />
        </main>
        <BottomBar />
        </body>
    </html>
    </ClerkProvider>
  )
}
