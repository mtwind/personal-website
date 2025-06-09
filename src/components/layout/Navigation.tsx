"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  useTheme,
  Popover,
} from "@mui/material";
import { useThemeToggle } from "@/context/ThemeContextProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Contact from "@/components/layout/Contact";

export default function Navigation() {
  const theme = useTheme();
  const { toggleColorMode } = useThemeToggle();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "contact-popover" : undefined;

  return (
    <AppBar position="static" color="secondary" enableColorOnDark>
      <Toolbar>
        <IconButton
          sx={{ mr: 1 }}
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

        <Button component={Link} href="/" color="inherit">
          Home
        </Button>
        <Button component={Link} href="/about" color="inherit">
          About
        </Button>
        <Button component={Link} href="/work" color="inherit">
          Work
        </Button>

        <Box sx={{ flexGrow: 1 }} />

        <Button color="inherit" aria-describedby={id} onClick={handleClick}>
          Contact
        </Button>
      </Toolbar>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        // Add a slight offset to prevent it from touching the button
        PaperProps={{
          sx: {
            marginTop: "8px",
          },
        }}
      >
        {/* Render your custom Contact component inside the Popover */}
        <Contact popup={true} />
      </Popover>
    </AppBar>
  );
}
