import "../theme/global.css";

import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello, my name is Adrian Mateoaea",
  description: "My personal page",
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
      <body className={fira.className}>{children}</body>
    </html>
  );
}
