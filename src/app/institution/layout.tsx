import type { Metadata } from "next";
import InstitutionWrapper from "../../components/wrappers/InstitutionWrapper";
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
     <InstitutionWrapper>
        {children}
     </InstitutionWrapper>
  );
}