import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
  description: "CTRL+Build project case study. Explore how we deliver projects with digital precision and master craftsmanship.",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

