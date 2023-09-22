import type { Metadata } from 'next'
import { Roboto } from "next/font/google";
import Footer from './components/Footer';
import ButtonUp from "./components/ButtonUp";
import Header from "./components/Header/Header";
import Hydration from "./components/Hydration";
import './globals.css'
import AuthProvider from './components/AuthProvider';

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://website.com'),
  title: 'Магазин',
  description: 'Інтернет магазин товарів',
  openGraph: {
    title: "Класна річ",
    description: "Мені попався класний товар",
    images: [
      {
        url: '/og.png',
        width: 800,
        height: 600,
        alt: 'My custom alt',
      },]
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col min-h-screen`}>
        <AuthProvider>
          <Hydration>
            <ButtonUp />
            <Header />
            <main className="max-w-7xl w-full mx-auto mt-[140px] px-3 sm:px-6 py-5">
              {children}
            </main>
            <Footer />
          </Hydration>
        </AuthProvider>
      </body>
    </html>
  )
}
