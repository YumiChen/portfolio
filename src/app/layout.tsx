import '/public/output.css'
import 'swiper/element/css/effect-coverflow'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yumi Chen Portfolio',
  description: 'Front-end Development Portfolio of Yumi Chen',
  openGraph: {
    title: 'Yumi Chen Portfolio',
    description: 'Front-end Development Portfolio of Yumi Chen',
    url: 'https://yumichen.github.io/portfolio/public/index.html',
    siteName: 'Yumi Chen Portfolio',
    images: [
      {
        url: 'https://cdn.jsdelivr.net/gh/YumiChen/portfolio@gh-pages/public/OgImage.jpg',
        width: 1200,
        height: 800,
      }
    ],
    locale: 'en_US',
    type: 'profile',
  },
  manifest: "https://cdn.jsdelivr.net/gh/YumiChen/portfolio@gh-pages/public/favicon/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body 
        className="relative transition-opacity duration-500 bg-teal-400 w-screen"
      >
        {children}
      </body>
    </html>
  )
}
