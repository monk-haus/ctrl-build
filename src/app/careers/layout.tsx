import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Control your future. Join CTRL+Build in defining the future of construction. We seek the precise, the passionate, and the pioneering.",
  openGraph: {
    title: "Careers | CTRL+Build",
    description: "Control your future. Join CTRL+Build in defining the future of construction.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

