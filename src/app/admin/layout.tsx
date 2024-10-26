import type { Metadata } from "next";
import AdminWrapper from "./components/AdminWrapper";

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
     <AdminWrapper>
          {children}
     </AdminWrapper>
  );
}