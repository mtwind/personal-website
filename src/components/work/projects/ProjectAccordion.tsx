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
import React, { useEffect, useState } from "react";

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
  id: string;
  projectName: string;
  githubLink?: string;
  organization?: string;
  date: string;
  techStack: string[];
  description: React.ReactNode;
  defaultExpanded?: boolean;
}

const ProjectAccordion: React.FC<ProjectAccordionProps> = ({
  id,
  projectName,
  githubLink,
  organization,
  date,
  techStack,
  description,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === `#${id}`) {
      setExpanded(true);
      // Optional: scroll the element into view
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [id]);

  return (
    <Accordion
      id={id}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      elevation={expanded ? 6 : 2}
      sx={{
        "&:before": { display: "none" },
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={`${id}-header`}
        sx={{
          // THE FIX IS HERE:
          backgroundColor: expanded ? "action.hover" : "transparent",
          transition: "background-color 0.3s ease-in-out",
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
              {githubLink ? (
                <Link href={githubLink} passHref>
                  <Box component="span" sx={iconWrapperStyles}>
                    <Typography variant="h6" sx={{ marginRight: 1 }}>
                      {projectName}
                    </Typography>
                    <LinkIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                  </Box>
                </Link>
              ) : (
                <Box component="span" sx={iconWrapperStyles}>
                  <Typography variant="h6" sx={{ marginRight: 1 }}>
                    {projectName}
                  </Typography>
                </Box>
              )}
            </Stack>

            <Box
              sx={{
                textAlign: { xs: "left", sm: "right" },
                flexShrink: 0,
                ml: { xs: 1, sm: 2 },
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
            <Stack
              direction="row"
              sx={{ flexWrap: "wrap", gap: 1.5, ml: { xs: 1, sm: 1 } }}
            >
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
