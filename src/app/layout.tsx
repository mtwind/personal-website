import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "@/styles/global.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AppThemeProvider } from "@/context/ThemeContextProvider";
import { Box } from "@mui/material"; // <-- Import Box

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  description: "Personal website for Matthew Wind, aspiring Software Engineer",
  title: "Matthew Wind | SWE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefinSans.className}>
      <body>
        <AppRouterCacheProvider>
          <AppThemeProvider>
            {/* This Box is our new main layout container */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Navigation />

              {/* The main content area is now wrapped in a Box that grows */}
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                }}
              >
                {children}
              </Box>

              <Footer />
            </Box>
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
