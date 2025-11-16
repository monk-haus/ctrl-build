import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CTRL+Build Privacy Policy. Last Updated: November 16, 2025. This policy details how we handle and protect your data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

