import Navbar from "@/components/Navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Araf Khalid",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
