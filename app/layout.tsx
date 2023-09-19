import { AuthContextProvider } from "./context/AuthContext";
import type { Metadata } from 'next'
import { Roboto } from "next/font/google";

import Footer from './components/Footer';
import ButtonUp from "./components/ButtonUp";
import './globals.css'
import Header from "./components/Header/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: 'Магазин',
  description: 'Інтернет магазин товарів',
  openGraph: {
    title: "Класна річ",
    description: "Мені попався класний товар",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthContextProvider>
          <ButtonUp />
          <Header />
          <main className="max-w-7xl mt-[140px] mx-auto w-full px-3 sm:px-6 py-5 flex-grow">
            {children}
          </main>
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  )
}
