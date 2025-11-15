import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junction Hackathon",
  description: "Junction Hackathon Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

