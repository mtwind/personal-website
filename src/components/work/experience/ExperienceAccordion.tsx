"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// A helper function to get the name of the tech from its image path
const getTechNameFromPath = (path: string): string => {
  try {
    const fileName = path.split("/").pop() || "";
    const techName = fileName.split(".")[0] || "";
    return techName;
  } catch {
    return "Tech icon";
  }
};

interface ExperienceAccordionProps {
  id: string;
  company: string;
  role: string;
  date: string;
  location: string;
  techStack: string[];
  description: React.ReactNode;
  defaultExpanded?: boolean;
}

const ExperienceAccordion: React.FC<ExperienceAccordionProps> = ({
  id,
  company,
  role,
  date,
  location,
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
          backgroundColor: expanded ? "action.hover" : "transparent",
          transition: "background-color 0.3s ease-in-out",
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
            gap: 1, // Adjusted gap for better mobile spacing
          }}
        >
          {/* Top Row: Stacks vertically on mobile */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              // THE FIX: Change flex direction on mobile screens
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1, sm: 0 }, // Add a gap when stacked vertically
            }}
          >
            <Box>
              <Typography variant="h6">{company}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {role}
              </Typography>
            </Box>
            {/* THE FIX: Align text left and remove margin on mobile */}
            <Box
              sx={{
                textAlign: { xs: "left", sm: "right" },
                flexShrink: 0,
                ml: { xs: 0, sm: 2 },
              }}
            >
              <Typography variant="body1">{date}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {location}
              </Typography>
            </Box>
          </Box>

          {/* Bottom Row: Tech Stack Icons */}
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

export default ExperienceAccordion;
