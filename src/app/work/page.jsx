"use client";

import { Typography, Box, Container, Divider, Stack } from "@mui/material";
import Job from "@/components/work/experience/ExperienceAccordion";
import WorkDisplay from "@/components/work/WorkDisplay";
import Intro from "@/components/work/Intro";
import React, { useState, useEffect } from "react";

export default function Work() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Divider
        sx={{
          borderBottomWidth: 3, // thickness (e.g., 3px)
          borderColor: "primary.main", // color (use theme color or hex)
        }}
      />

      <Intro />

      <Divider
        sx={{
          borderBottomWidth: 3, // thickness (e.g., 3px)
          borderColor: "primary.main", // color (use theme color or hex)
        }}
      />

      <WorkDisplay></WorkDisplay>
    </>
  );
}
