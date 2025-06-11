"use client";

import Education from "@/components/work/education/Coursework";
import Experiences from "@/components/work/experience/Experiences";
import Projects from "@/components/work/projects/Projects";
import { Box, Container, Paper, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";

// A helper component to create the content panel for each tab
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`work-tabpanel-${index}`}
      aria-labelledby={`work-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function WorkDisplay() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Get the hash from the URL (e.g., "#project-portfolio-website")
    const hash = window.location.hash;

    // Check the prefix of the hash to determine which tab to show
    if (hash.startsWith("#project-")) {
      setValue(1); // Index 1 is "Projects"
    } else if (hash.startsWith("#coursework-")) {
      setValue(2); // Index 2 is "Coursework"
    }
    // If it's "#experience-" or no hash, it will default to 0, which is correct.
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={2}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            aria-label="work categories tabs"
            variant="fullWidth" // Makes tabs take up the full width
          >
            <Tab label="Experience" id="work-tab-0" />
            <Tab label="Projects" id="work-tab-1" />
            <Tab label="Coursework" id="work-tab-2" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Experiences />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Projects />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Education />
        </TabPanel>
      </Paper>
    </Container>
  );
}
