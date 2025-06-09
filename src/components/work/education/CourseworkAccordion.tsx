"use client";

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Define the props for the coursework accordion
interface CourseworkAccordionProps {
  courseTitle: string;
  date: string;
  techStack: React.ReactNode[];
  description: React.ReactNode;
  defaultExpanded?: boolean;
}

const CourseworkAccordion: React.FC<CourseworkAccordionProps> = ({
  courseTitle,
  date,
  techStack,
  description,
  defaultExpanded = false,
}) => {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      sx={{ "&:before": { display: "none" } }}
      elevation={2}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        // THE FIX: Added this sx prop to align the icon
        sx={{
          // This targets the icon's wrapper and aligns it to the bottom of the flex row
          "& .MuiAccordionSummary-expandIconWrapper": {
            alignSelf: "flex-end",
          },
        }}
      >
        {/* Main flex container to separate left and right content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Left Side: Course Title and Tech Stack below it */}
          <Stack spacing={1.5}>
            <Typography variant="h6">{courseTitle}</Typography>
            <Stack direction="row" spacing={1.5}>
              {techStack.map((IconComponent, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "text.secondary",
                  }}
                >
                  {IconComponent}
                </Box>
              ))}
            </Stack>
          </Stack>

          {/* Right Side: Date */}
          <Box sx={{ textAlign: "right", flexShrink: 0, ml: 2 }}>
            <Typography variant="body1" color="text.secondary">
              {date}
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={{ borderTop: 1, borderColor: "divider" }}>
        <Box
          sx={{
            lineHeight: 1.7,
            color: "text.secondary",
            "> ul": { pl: 2, mt: 0 },
          }}
        >
          {description}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseworkAccordion;
