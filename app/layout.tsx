import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deyvosbooks.com"),
  title: "AJ Reid | Shadow of the Beast",
  description: "Maret Beorn survived the birth that killed his magically gifted twin. The ghost never left. Enter the dark fantasy world of Deyvos.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Shadow of the Beast — A Novel of Deyvos", description: "One life. Two souls. Magic enough to ruin them both.", url: "https://deyvosbooks.com", siteName: "AJ Reid", images: [{ url: "/og.png", width: 1734, height: 907, alt: "Shadow of the Beast — A Novel of Deyvos" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Shadow of the Beast — A Novel of Deyvos", description: "One life. Two souls. Magic enough to ruin them both.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
