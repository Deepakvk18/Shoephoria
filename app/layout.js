import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import NavBar from '@/components/NavBar'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ShoePhoria',
  description: 'A onestop marketplace for footwear',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
