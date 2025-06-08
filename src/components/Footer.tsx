"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const theme = useTheme();

  // Define a common style for the icon wrappers to reduce repetition
  const iconWrapperStyles = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "4px 8px", // Add some padding
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
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
          <Link href="https://www.linkedin.com/in/matthewtwind/" passHref>
            <Box component="span" sx={iconWrapperStyles}>
              {/* The className is removed, color is now handled by the theme */}
              <Image
                src="/icons/linkedIn.svg"
                alt="LinkedIn"
                width={16}
                height={16}
                style={{
                  filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                }}
              />
              <Typography sx={{ color: "text.primary", marginLeft: 1 }}>
                LinkedIn
              </Typography>
            </Box>
          </Link>

          <Link href="https://github.com/mtwind" passHref>
            <Box component="span" sx={iconWrapperStyles}>
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={16}
                height={16}
                style={{
                  filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                }}
              />
              <Typography sx={{ color: "text.primary", marginLeft: 1 }}>
                GitHub
              </Typography>
            </Box>
          </Link>

          <Link href="mailto:mtwind2003@gmail.com" passHref>
            <Box component="span" sx={iconWrapperStyles}>
              {/* For MUI icons, we can set the color directly */}
              <EmailIcon sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography sx={{ color: "text.primary", marginLeft: 1 }}>
                Email
              </Typography>
            </Box>
          </Link>
        </Stack>

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
