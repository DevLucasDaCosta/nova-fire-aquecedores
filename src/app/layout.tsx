import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppPopup from "@/components/WhatsAppPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova Fire Aquecedores - Especialistas em Aquecedores RJ",
  description: "Instalação, manutenção e reparo de aquecedores no Rio de Janeiro. Atendimento 24h, garantia e qualidade. Orçamento gratuito!",
  keywords: "aquecedores, instalação, manutenção, reparo, Rio de Janeiro, 24h, emergência",
  authors: [{ name: "Nova Fire Aquecedores" }],
  openGraph: {
    title: "Nova Fire Aquecedores - Especialistas em Aquecedores RJ",
    description: "Instalação, manutenção e reparo de aquecedores no Rio de Janeiro. Atendimento 24h, garantia e qualidade.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <WhatsAppPopup />
      </body>
    </html>
  );
}
