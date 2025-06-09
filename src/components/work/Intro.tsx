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
        Hello there. I`&apos;`,m a software engineer studying at Purdue
        University. <br /> <br />I enjoy working with all types of tech stacks
        but have a preference towards object oriented development, especially
        with Python and Java.
        <br /> <br />I love talking about new opportunities or anything tech
        related, so please reach out!
      </Typography>
    </Box>
  );
}
