import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GRBT8 Projesi',
  description: 'Vercel\'den GitHub\'a aktarılan proje',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
