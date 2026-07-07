import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PT Selera Sukses Bersama | Distribusi Makanan & Foodservice Solutions",
  description:
    "PT Selera Sukses Bersama menyediakan produk makanan beku, dimsum premium, saus, dan camilan berkualitas untuk hotel, restoran, kafe, retail, dan distributor di seluruh Indonesia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
