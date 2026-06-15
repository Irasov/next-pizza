import { Providers } from "@/shared/components/shared/providers";
import { Nunito } from "next/font/google";

import "./globals.css";
import { cn } from "@/shared/lib/utils";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", nunito.variable)}
    >
      <head>
        <link data-rh="true" rel="icon" href="logo.png" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
