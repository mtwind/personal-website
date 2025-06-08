"use client";

import Link from "next/link";
import ImageGrid from "@/components/home/ImageGrid";
import {
  Typography,
  Container,
  Box,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";

export default function Home() {
  const theme = useTheme();

  // Use MUI's media query hooks to determine the screen size.
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isSmall = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 900px

  // Determine which size to pass to the ImageGrid component.
  // Defaults to 2 (the largest, 6-image grid).
  let size: 0 | 1 | 2 = 2;
  if (isMobile) {
    size = 0; // 3-image grid
  } else if (isSmall) {
    size = 1; // 4-image grid
  }

  return (
    <>
      {/* We now render a single ImageGrid and pass the dynamic size prop */}
      <ImageGrid size={size} />

      {/* The rest of your page content remains the same */}
      <Container
        sx={{
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 50,
            }}
          >
            Matthew Wind
          </Typography>

          <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
            Software Engineering
          </Typography>
        </Stack>
      </Container>
    </>
  );
}
