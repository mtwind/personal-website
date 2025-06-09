import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import CourseworkAccordion from "@/components/work/education/CourseworkAccordion";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiNextdotjs,
  SiMui,
  SiPython,
  SiCplusplus,
} from "react-icons/si";

export default function Education() {
  return (
    <Stack spacing={2}>
      <CourseworkAccordion
        courseTitle="Data Structures & Algorithms"
        date="Fall 2023"
        techStack={[
          <SiPython size={24} title="Python" />,
          <SiCplusplus size={24} title="C++" />,
        ]}
        description={
          <ul>
            <li>
              Covered fundamental data structures including arrays, linked
              lists, trees, graphs, and hash tables.
            </li>
            <li>
              Implemented various algorithms for searching, sorting, and graph
              traversal in Python and C++.
            </li>
          </ul>
        }
        defaultExpanded={true}
      />

      <CourseworkAccordion
        courseTitle="Web Application Development"
        date="Spring 2024"
        techStack={[
          <SiReact size={24} title="React" />,
          <SiNextdotjs size={24} title="Next.js" />,
        ]}
        description="Learned about full-stack web development, including frontend component architecture with React, server-side rendering with Next.js, and REST API design."
      />
    </Stack>
  );
}
