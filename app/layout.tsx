import { Footer, Header } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-barba="wrapper" className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
