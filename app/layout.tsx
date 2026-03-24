import Header from '../components/layout/Header'
import './globals.css'
import { blackHanSans } from '../styles/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko"  className={`${blackHanSans.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}