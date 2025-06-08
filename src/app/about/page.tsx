import { Typography, Container } from "@mui/material";

export default function About() {
  return (
    <>
      <Container
        sx={{
          minHeight: "100vh",
          padding: "0 0.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Welcome to the about page
        </Typography>
      </Container>
    </>
  );
}
