
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ShoePhoria',
  description: 'A onestop marketplace for footwear',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">      
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
