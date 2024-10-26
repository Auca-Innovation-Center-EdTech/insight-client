import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Insight",
  description: "Insight is an innovative Management Information System (MIS) launched to combat the growing issues of degree forgery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        {children}
      </body>
    </html>
  );
}
