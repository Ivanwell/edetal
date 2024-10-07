import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'Автозапчастини 🚗 eDetal',
  description:
    'Дешеві та якісні запчастини для Європейських, Японських, Корейських та Американських авто',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
