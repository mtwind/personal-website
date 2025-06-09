"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Stack,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";
import { useTheme } from "@emotion/react";

// Define the props for this specific accordion
interface ProjectAccordionProps {
  projectName: string;
  githubLink: string;
  organization?: string; // The '?' makes this prop optional
  date: string;
  techStack: React.ReactNode[];
  description: React.ReactNode;
  defaultExpanded?: boolean;
}

const ProjectAccordion: React.FC<ProjectAccordionProps> = ({
  projectName,
  githubLink,
  organization,
  date,
  techStack,
  description,
  defaultExpanded = false,
}) => {
  const theme = useTheme();

  // Define a common style for the icon wrappers to reduce repetition
  const iconWrapperStyles = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "1px 4px", // Add some padding
    borderRadius: "4px", // Add rounded corners
    // Change background on hover for better user feedback
    "&:hover": {
      backgroundColor: "action.hover",
    },
  };

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
            // THE FIX: Reduced gap from 1 to 0.5 to decrease space
            gap: 0.5,
          }}
        >
          {/* Top Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            {/* Left Side: Project Name and GitHub Link Icon */}
            <Stack direction="row" alignItems="center" spacing={0.25}>
              <Link href={githubLink} passHref>
                <Box component="span" sx={iconWrapperStyles}>
                  <Typography variant="h6" sx={{ marginRight: 1 }}>
                    {projectName}
                  </Typography>
                  <LinkIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                </Box>
              </Link>
            </Stack>

            {/* Right Side: Organization and Date */}
            <Box sx={{ textAlign: "right", flexShrink: 0, ml: 2 }}>
              {organization && (
                <Typography variant="body1">{organization}</Typography>
              )}
              <Typography variant="body1" color="text.secondary">
                {date}
              </Typography>
            </Box>
          </Box>

          {/* Bottom Row: Tech Stack Icons */}
          <Box sx={{ pl: 0.5 }}>
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

export default ProjectAccordion;
