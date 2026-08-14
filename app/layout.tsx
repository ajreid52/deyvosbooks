import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deyvosbooks.com"),
  title: "AJ Reid | Shadow of the Beast",
  description: "AJ Reid writes dark fantasy about strange magic, complicated people, and the haunted world of Deyvos.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Shadow of the Beast — A Novel of Deyvos", description: "Dark fantasy. Strange magic. Complicated people.", url: "https://deyvosbooks.com", siteName: "AJ Reid", images: [{ url: "/og.png", width: 1734, height: 907, alt: "Shadow of the Beast — A Novel of Deyvos" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Shadow of the Beast — A Novel of Deyvos", description: "Dark fantasy. Strange magic. Complicated people.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
