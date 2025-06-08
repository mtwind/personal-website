"use client";

import { Box, Stack, Typography } from "@mui/material";
import Contact from "@/components/layout/Contact";

export default function Footer() {
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
