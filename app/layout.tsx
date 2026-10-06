import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Empire Engineering Limited",
    template: "%s | Empire Engineering Limited",
  },

  description:
    "Empire Engineering Limited-এর নির্মাণ, সিভিল ইঞ্জিনিয়ারিং, ভবন নির্মাণ, প্রকৌশল সেবা, জ্ঞান ও প্রকল্প সম্পর্কিত তথ্য।",

  keywords: [
    "Empire Engineering Limited",
    "সিভিল ইঞ্জিনিয়ারিং",
    "নির্মাণ",
    "ভবন নির্মাণ",
    "সিভিল ইঞ্জিনিয়ারিং বাংলাদেশ",
    "construction Bangladesh",
    "civil engineering Bangladesh",
  ],

  authors: [
    {
      name: "Empire Engineering Limited",
    },
  ],

  creator: "Empire Engineering Limited",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  verification: {
    google: "zmM9riAentcDA-vJutDonh69UeXKFG0XwC6lStReaZw",
  },

  openGraph: {
    title: "Empire Engineering Limited",
    description:
      "নির্মাণ ও সিভিল ইঞ্জিনিয়ারিং সেবা, প্রকল্প এবং প্রকৌশল জ্ঞান।",
    type: "website",
    locale: "bn_BD",
    siteName: "Empire Engineering Limited",
  },

  twitter: {
    card: "summary_large_image",
    title: "Empire Engineering Limited",
    description:
      "নির্মাণ ও সিভিল ইঞ্জিনিয়ারিং সেবা এবং প্রকৌশল জ্ঞান।",
  },
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