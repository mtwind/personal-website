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

const getTechNameFromPath = (path: string): string => {
  try {
    const fileName = path.split("/").pop() || "";
    const techName = fileName.split(".")[0] || "";
    return techName;
  } catch {
    return "Tech icon";
  }
};

interface CourseworkAccordionProps {
  id: string;
  courseTitle: string;
  date: string;
  techStack: string[];
  description: React.ReactNode;
  defaultExpanded?: boolean;
  organization?: string[];
}

const CourseworkAccordion: React.FC<CourseworkAccordionProps> = ({
  id,
  courseTitle,
  date,
  techStack,
  description,
  defaultExpanded = false,
  organization = "Purdue University",
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
          "& .MuiAccordionSummary-expandIconWrapper": {
            alignSelf: "flex-end",
          },
        }}
      >
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
          <Stack spacing={1.5}>
            <Typography variant="h6">{courseTitle}</Typography>
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
