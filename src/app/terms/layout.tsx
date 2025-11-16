import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "CTRL+Build Terms of Service. Last Updated: November 16, 2025. This agreement governs your use of the CTRL+Build website.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

