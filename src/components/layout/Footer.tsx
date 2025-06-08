"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Contact from "@/components/layout/Contact";

export default function Footer() {
  const theme = useTheme();

  // Define a common style for the icon wrappers to reduce repetition
  const iconWrapperStyles = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "1px 4px", // Add some padding
    borderRadius: "4px", // Add rounded corners
    // Change background on hover for better user feedback
    "&:hover": {
      backgroundColor: "action.hover",
    },
    // Set the background color only in light mode
    backgroundColor:
      theme.palette.mode === "light" ? "action.selected" : "transparent",
  };

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "secondary.main",
        color: "primary.contrastText",
        padding: 2,
        justifyContent: "center",
      }}
    >
      <Stack spacing={1} sx={{ alignItems: "center" }}>
        <Contact />

        <Stack>
          <Typography
            sx={{
              alignItems: "center",
              color: "text.secondary",
            }}
            fontSize={15}
          >
            @ 2025 Matthew Wind
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
