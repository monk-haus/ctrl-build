import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with CTRL+Build. Our team is available to discuss your project's requirements. Submit a project brief or contact our headquarters directly.",
  openGraph: {
    title: "Contact | CTRL+Build",
    description: "Start a conversation. Our team is available to discuss your project's requirements.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

