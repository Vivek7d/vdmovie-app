import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/hooks/AuthContext";
import RecoilRootWrapper from "@/RecoilRootWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix-Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootWrapper>
          <AuthProvider>{children}</AuthProvider>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
