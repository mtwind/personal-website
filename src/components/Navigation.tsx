"use client";

import React from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import { useThemeToggle } from "@/context/ThemeContextProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Moon icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Sun icon

export default function Navigation() {
  const theme = useTheme();
  const { toggleColorMode } = useThemeToggle();

  return (
    <AppBar position="static" color="secondary" enableColorOnDark>
      <Toolbar sx={{ backgroundColor: theme.palette.secondary.main }}>
        {/* 1. Theme toggle button is the very first item */}
        <IconButton
          sx={{ mr: 1 }} // Add a little margin to the right
          onClick={toggleColorMode}
          color="inherit"
          aria-label="toggle light/dark theme"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>

        {/* 2. Add your navigation links here */}
        {/* The `component={Link}` prop makes MUI buttons work with Next.js routing */}
        <Button component={Link} href="/" color="inherit">
          Home
        </Button>
        <Button component={Link} href="/about" color="inherit">
          About
        </Button>
        <Button component={Link} href="/work" color="inherit">
          Projects
        </Button>

        {/* This Box grows to push any subsequent items to the far right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Example of an item you might want on the right side */}
        <Button component={Link} href="/contact" color="inherit">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
