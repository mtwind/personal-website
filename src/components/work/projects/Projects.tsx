import ProjectAccordion from "@/components/work/projects/ProjectAccordion";
import { Stack } from "@mui/material";

export default function Projects() {
  return (
    <Stack spacing={2}>
      {/* First Accordion Item */}
      <ProjectAccordion
        projectName="Personal Website"
        githubLink="https://github.com/mtwind/personal-website" // Replace with your actual repo link
        organization="Personal Project"
        date="2024 – Present"
        techStack={[]}
        description="The very website you are currently viewing. Built from the ground up using a modern tech stack to serve as a central hub for my work and skills."
        defaultExpanded={false}
      />

      {/* Second Project Item */}
      <ProjectAccordion
        projectName="Data Analysis Toolkit"
        githubLink="https://github.com/mtwind/data-toolkit" // Replace with your actual repo link
        date="2023"
        techStack={
          [
            /* Add other icons here */
          ]
        }
        description="A command-line tool built with Python for automating common data cleaning and analysis tasks."
      />
    </Stack>
  );
}
