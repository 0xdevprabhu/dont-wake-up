import './globals.css';

export const metadata = {
  title: "Don't Wake Up! - Casual Stealth Puzzle",
  description: "Complete tasks quietly without waking up Mr. Snoozy! A cute, mobile-first 2D casual puzzle game.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Don't Wake Up!"
  },
  icons: {
    icon: "/icons/icon-192.svg",
    apple: "/icons/icon-192.svg"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#FFB74D"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="antialiased flex items-center justify-center min-h-screen bg-[#F5EFEB] p-0 sm:p-4">
        {/* Responsive mobile container */}
        <div className="w-full h-full sm:h-[94vh] sm:max-h-[860px] sm:max-w-[430px] flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
