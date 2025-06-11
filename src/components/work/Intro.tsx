import { Box, Typography } from "@mui/material";

export default function Intro() {
  return (
    <Box
      sx={{
        minHeight: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 5rem",
      }}
    >
      <Typography
        sx={{
          fontSize: 20,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        Hello there. I&apos;m a software engineer studying at Purdue University.{" "}
        <br /> <br />
        See my work below and please reach out!
      </Typography>
    </Box>
  );
}
