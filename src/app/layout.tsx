import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";

const raptor = localFont({
  src: [
    { path: "../../public/assets/fonts/RaptorPremium-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/RaptorPremium-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/assets/fonts/RaptorPremium-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/assets/fonts/RaptorPremium-Slanted.ttf", weight: "400", style: "italic" },
    { path: "../../public/assets/fonts/RaptorPremium-BoldSlanted.ttf", weight: "700", style: "italic" },
    { path: "../../public/assets/fonts/RaptorPremium-LightSlanted.ttf", weight: "300", style: "italic" }
  ],
  variable: "--font-raptor",
  display: "swap"
});

const epikaCondensed = localFont({
  src: [
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-Black.otf", weight: "900", style: "normal" },
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-SemiBoldItalic.otf", weight: "600", style: "italic" },
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../../public/assets/fonts/EpikaSerifCondensedPremium-BlackItalic.otf", weight: "900", style: "italic" }
  ],
  variable: "--font-epika-condensed",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ctrl-build.com"),
  title: {
    default: "CTRL+Build | Digital Precision in Construction",
    template: "%s | CTRL+Build",
  },
  description: "CTRL+Build is a next-generation construction firm merging digital precision with master craftsmanship to deliver projects of unparalleled quality. We unite generative design, virtual construction, and advanced logistics with decades of on-site mastery.",
  keywords: [
    "construction",
    "VDC",
    "virtual design and construction",
    "BIM",
    "building information modeling",
    "general contracting",
    "pre-construction",
    "digital twin",
    "construction management",
    "New York construction",
    "commercial construction",
    "residential construction",
    "industrial construction",
  ],
  authors: [{ name: "CTRL+Build" }],
  creator: "CTRL+Build",
  publisher: "CTRL+Build",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ctrl-build.com",
    siteName: "CTRL+Build",
    title: "CTRL+Build | Digital Precision in Construction",
    description: "A next-generation construction firm merging digital precision with master craftsmanship to deliver projects of unparalleled quality.",
    images: [
      {
        url: "/assets/images/hero/photo.jpg",
        width: 1200,
        height: 630,
        alt: "CTRL+Build - Digital Precision in Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTRL+Build | Digital Precision in Construction",
    description: "A next-generation construction firm merging digital precision with master craftsmanship.",
    images: ["/assets/images/hero/photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raptor.variable} ${epikaCondensed.variable} antialiased`}>
        <StructuredData />
        <Header />
        <div style={{ minHeight: "120vh" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
