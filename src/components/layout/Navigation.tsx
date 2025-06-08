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
  Popover, // 1. Import Popover instead of Dialog
} from "@mui/material";
import { useThemeToggle } from "@/context/ThemeContextProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Contact from "@/components/layout/Contact"; // 2. Import your new Contact component

export default function Navigation() {
  const theme = useTheme();
  const { toggleColorMode } = useThemeToggle();

  // 3. State to manage the anchor element for the Popover
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // 4. Update click handler to set the anchor to the clicked button
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Determine if the Popover should be open based on the anchorEl state
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
          Projects
        </Button>

        <Box sx={{ flexGrow: 1 }} />

        {/* 5. The Contact button now opens the Popover */}
        <Button color="inherit" aria-describedby={id} onClick={handleClick}>
          Contact
        </Button>
      </Toolbar>

      {/* 6. Replace Dialog with the Popover component */}
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
