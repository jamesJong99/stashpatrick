import * as React from 'react';
import type { Metadata } from "next";
import Head from 'next/head';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import "./globals.css";
import { GlobalStyles } from '@mui/material';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


import AppMainLayout from '@/layouts/main';

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        // backgroundImage: 'url(/assets/image/whalepaper.png)',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
      },
    }}
  />
);

export const metadata: Metadata = {
  title: "LuX Checker",
  description: "",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <AppMainLayout> */}
              {globalStyles}
              {children}
            {/* </AppMainLayout> */}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
