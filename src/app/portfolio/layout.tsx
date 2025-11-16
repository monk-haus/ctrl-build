import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our project archive. CTRL+Build's portfolio showcases commercial, residential, and industrial projects delivered with digital precision and master craftsmanship.",
  openGraph: {
    title: "Portfolio | CTRL+Build",
    description: "Explore our project archive. Commercial, residential, and industrial projects delivered with digital precision.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

