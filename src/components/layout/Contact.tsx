"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact({ popup = false }) {
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
    <Stack
      spacing={1}
      direction={{
        xs: "column",
        sm: popup ? "column" : "row",
      }}
      sx={{
        alignItems: popup ? "center" : "flex-start",
      }}
    >
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
      {popup && (
        <Link href="tel:+1630520150" passHref>
          <Box component="span" sx={iconWrapperStyles}>
            <PhoneIcon sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography sx={{ color: "text.primary", marginLeft: 1 }}>
              (630) 520-150
            </Typography>
          </Box>
        </Link>
      )}
    </Stack>
  );
}
