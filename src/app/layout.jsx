import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hugo THOMAS",
  description: "Portfolio développeur Hugo THOMAS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/android-chrome-512x512.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex min-h-screen w-screen flex-col items-center bg-zinc-100 antialiased dark:bg-zinc-900">
        <Providers>
          <Header />
          <main className="mx-auto flex w-full flex-col items-center">
            {children}
          </main>
          <Footer />
          <Toaster
            id="toaster"
            position="bottom-center"
            gutter={12}
            containerStyle={{ top: 0, left: 0, width: "100dvw" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 6000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "lightgrey",
                color: "grey",
              },
            }}
          />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
