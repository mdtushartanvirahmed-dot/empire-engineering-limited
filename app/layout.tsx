import "./globals.css"

export const metadata = {
  title: "Empire Engineering Limited",
  description: "নির্মাণ ও সিভিল ইঞ্জিনিয়ারিং সেবা",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  )
}