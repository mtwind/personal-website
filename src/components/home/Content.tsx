"use client";

import { Typography, Container, Box, useTheme, Stack } from "@mui/material";

export default function Content({ size = 0 }) {
  const theme = useTheme();

  return (
    <>
      <Container
        sx={{
          minHeight: size === 1 ? "40vh" : "30vh",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem 1rem",
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
            Software Engineering | Finance
          </Typography>
        </Stack>
      </Container>
    </>
  );
}
