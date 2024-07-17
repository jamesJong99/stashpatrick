"use client";

import React from "react";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
// import Header from './header';
import Nav from "@/sections/header/nav";

type Props = {
  children: React.ReactNode;
  title: string
};

export default function AppMainLayout({ children, title }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Nav title={title}>
      {children}
      </Nav>

    </Box>
  );
}
