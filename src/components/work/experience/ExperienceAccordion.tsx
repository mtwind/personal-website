"use client";

import React from "react";
import Image from "next/image"; // 1. Make sure next/image is imported
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Define the props the component will accept
interface ExperienceAccordionProps {
  company: string;
  role: string;
  date: string;
  location: string;
  techStack: string[]; // 2. Changed from React.ReactNode[] to string[]
  description: React.ReactNode;
  defaultExpanded?: boolean;
}

const ExperienceAccordion: React.FC<ExperienceAccordionProps> = ({
  company,
  role,
  date,
  location,
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
        sx={{
          "& .MuiAccordionSummary-content": {
            display: "flex",
            flexDirection: "column",
            width: "100%",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            alignSelf: "flex-end",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          {/* Top Row: Company/Role on left, Date/Location on right */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography variant="h6">{company}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {role}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "right", flexShrink: 0, ml: 2 }}>
              <Typography variant="body1">{date}</Typography>
              <Typography variant="body2" color="text.secondary">
                {location}
              </Typography>
            </Box>
          </Box>

          {/* Bottom Row: Tech Stack Icons */}
          <Box sx={{ pl: 0.5 }}>
            <Stack direction="row" spacing={1.5}>
              {/* 3. The .map function now renders an <Image> for each src string */}
              {techStack.map((imageSrc) => (
                <Image
                  key={imageSrc}
                  src={imageSrc}
                  alt="Tech stack icon"
                  width={24} // Set a consistent size
                  height={24}
                  style={{ objectFit: "contain" }} // Use 'contain' for logos
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </AccordionSummary>

      {/* This is the part that expands */}
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

export default ExperienceAccordion;
