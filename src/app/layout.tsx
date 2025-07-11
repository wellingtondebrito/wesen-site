import type { Metadata } from "next";
import { Lexend, Lexend_Exa } from "next/font/google";
import "./globals.css";

const lexendSans = Lexend({
  variable: "--font-lexend-sans",
  subsets: ["latin"],
});

const lexendMono = Lexend_Exa({
  variable: "--font-lexend-exa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wesen Technologies",
  description:
    "Somos a WeSen Technologies — uma empresa criada por dois amigos que acreditam que tecnologia pode ser simples, funcional e estratégica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendSans.variable} ${lexendMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
