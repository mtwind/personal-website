"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getTechNameFromPath = (path: string): string => {
  try {
    const fileName = path.split("/").pop() || "";
    const techName = fileName.split(".")[0] || "";
    return techName;
  } catch {
    return "Tech icon";
  }
};

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
interface ProjectAccordionProps {
  projectName: string;
  githubLink: string;
  organization?: string;
  date: string;
  techStack: string[];
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
          {/* Top Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1, sm: 0 },
            }}
          >
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

            <Box
              sx={{
                textAlign: { xs: "left", sm: "right" },
                flexShrink: 0,
                ml: { xs: 0, sm: 2 },
              }}
            >
              {organization && (
                <Typography variant="body1">{organization}</Typography>
              )}
              <Typography variant="body1" color="text.secondary">
                {date}
              </Typography>
            </Box>
          </Box>

          {/* Bottom Row: Tech Stack Images */}
          <Box sx={{ pl: { xs: 0, sm: 0.5 } }}>
            <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1.5 }}>
              {techStack.map((imageSrc) => {
                const techName = getTechNameFromPath(imageSrc);
                return (
                  <Image
                    key={imageSrc}
                    src={imageSrc}
                    alt={`${techName} logo`}
                    title={techName}
                    width={24}
                    height={24}
                    style={{ objectFit: "contain" }}
                  />
                );
              })}
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
