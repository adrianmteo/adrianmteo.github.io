import "../theme/global.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello, my name is Adrian Mateoaea",
  description: "",
  keywords:
    "full,stack,developer,web,apis,typescript,graphql,prisma,postgresql,nextjs,vercel,swiftui,ios,watchos,azure,amazon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
