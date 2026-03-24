export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header>Trip Archive Header</header>
      <body>{children}</body>
    </html>
  )
}