import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Наші контакти 📞 Edetal',
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
      <body>{children}</body>
    </html>
  )
}
