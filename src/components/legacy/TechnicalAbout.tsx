import MyInfo from "@/components/about/MyInfo"; // Adjust this import path as needed
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function AboutPage() {
  return (
    <Stack spacing={4} sx={{ padding: { xs: 2, md: 4 } }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        About Me
      </Typography>

      {/* First MyInfo Component */}
      <MyInfo
        textPosition="left"
        images={["/icons/C3.png", "/icons/CPlusPlus.png", "/icons/Java2.png"]}
        description={
          <React.Fragment>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Backend & Systems Development
            </Typography>
            <Typography variant="body1" component="p">
              My coursework and projects have built a strong foundation in
              systems programming and backend development. I am proficient in
              languages like C, C++, and Java, focusing on creating efficient,
              scalable, and robust software solutions.
            </Typography>
          </React.Fragment>
        }
      />

      {/* Second MyInfo Component */}
      <MyInfo
        textPosition="right"
        images={[
          "/icons/Dart.png",
          "/icons/Flutter.png",
          "/icons/Firebase.png",
        ]}
        description={
          <React.Fragment>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Mobile & Full-Stack Applications
            </Typography>
            <Typography variant="body1" component="p">
              I have hands-on experience developing cross-platform mobile
              applications using Flutter and Dart. Leveraging Firebase for
              backend services, I can build and deploy complete, real-time,
              full-stack solutions from the ground up.
            </Typography>
          </React.Fragment>
        }
      />
    </Stack>
  );
}
