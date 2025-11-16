import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Our fully-integrated, data-driven workflow. We command the entire process, from digital twin to final execution. VDC & Planning, Execution & Management, Completion & Fit-Out.",
  openGraph: {
    title: "Services | CTRL+Build",
    description: "Our fully-integrated, data-driven workflow. We command the entire process, from digital twin to final execution.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

