"use client";

import React, { useState } from "react";
import {
  Box,
  Stack,
  Tabs,
  Tab,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import Experiences from "@/components/work/experience/Experiences";
import Projects from "@/components/work/projects/Projects";
import Education from "@/components/work/education/Coursework";

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
