import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FireCursor from "@/components/Cursor/FireCursor";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-main",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Теплий Дотик — печі, груби, каміни та барбекю",
  description:
    "Теплий Дотик — виготовлення печей, груб, камінів та барбекю-комплексів у Чернівецькій області під ключ. Тепло, затишок і надійність для вашого дому.",

  openGraph: {
    title: "Теплий Дотик — печі, груби, каміни та барбекю",
    description:
      "Печі, груби, каміни та барбекю-комплекси на замовлення.",
    url: "https://warmtouch.vercel.app",
    siteName: "Теплий Дотик",
    locale: "uk_UA",
    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/dvrha1ntw/image/upload/v1789049004/og-image_f879vg.jpg",
        width: 1200,
        height: 630,
        alt: "Теплий Дотик — печі, груби, каміни та барбекю",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Теплий Дотик — печі, груби, каміни та барбекю",
    description:
      "Печі, груби, каміни та барбекю-комплекси на замовлення.",
    images: [
      "https://res.cloudinary.com/dvrha1ntw/image/upload/v1789049004/og-image_f879vg.jpg",
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" data-scroll-behavior="smooth" className={inter.variable}>
      <body>
        {children}
        <FireCursor />
      </body>
    </html>
  );
}