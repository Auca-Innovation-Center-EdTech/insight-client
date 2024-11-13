import type { Metadata } from "next";
import AdminWrapper from "../../components/wrappers/AdminWrapper";
import React from "react";

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