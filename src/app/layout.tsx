import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import { Providers } from "@/app/providers";
import ThemeSwitcher from "@/app/components/theme-switcher";
import Navigation from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prograsec: AI-Powered Apps, Dazzling Graphics, Secure Solutions",
  description:
    "Prograsec empowers businesses with intelligent apps, captivating graphics, and secure solutions. We leverage AI-powered programming to craft web & mobile apps that automate tasks, engage users, and drive results. Our expertise in secure development ensures peace of mind. Let's unlock your digital potential!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          {children}
          <ThemeSwitcher />
        </Providers>
      </body>
    </html>
  );
}
