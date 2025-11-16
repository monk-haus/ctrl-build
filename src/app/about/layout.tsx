import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "We are the constant. CTRL+Build is a collective of engineers, architects, and master builders united by a single mission: to bring digital precision and absolute accountability to the built world.",
  openGraph: {
    title: "About | CTRL+Build",
    description: "We are the constant. A collective of engineers, architects, and master builders united by a single mission.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

