import ExperienceAccordion from "@/components/work/experience/ExperienceAccordion";
import { Stack } from "@mui/material";

export default function Experiences() {
  return (
    <Stack spacing={2}>
      {/* Capital One */}
      <ExperienceAccordion
        company="Capital One"
        role="Software Engineer Intern"
        date="June 2025 – Aug 2025"
        location="Richmond, VA"
        techStack={[
          "/icons/TypeScript.png",
          "/icons/Kotlin.png",
          "/icons/aws.png",
          "/icons/jira.png",
          "/icons/jest.png",
        ]}
        description={
          <ul>
            <li>
              Developing an internal enterprise wide testing tool to automate
              unit testing, component testing, and live dependency testing to
              achieve 100% coverage.
            </li>
          </ul>
        }
        defaultExpanded={false}
      />

      {/* Shopwave */}
      <ExperienceAccordion
        company="Shopwave"
        role="Software Engineering Intern"
        date="Jan 2025 – April 2025"
        location="London, UK"
        techStack={[
          "/icons/React.png",
          "/icons/TypeScript.png",
          "/icons/JavaScript.png",
          "/icons/Nextjs.png",
          "/icons/MaterialUI.png",
          "/icons/Vercel.png",
          "/icons/aws.png",
          "/icons/HTML5.png",
          "/icons/CSS3.png",
          "/icons/TailwindCSS.png",
        ]}
        description={
          <ul>
            <li>
              Utilized React, Next.js, TypeScript and various other tools to
              develop client focused reporting analytical features for
              Shopwave’s point of sales and inventory management systems, all
              while adapting to a new culture and startup environment.
            </li>
            <li>
              Developed a “Where to Next” tool that queries internal and
              external APIs to allow potential customers to analyze possible
              areas of expansion with React, Next.js, Vercel, JavaScript,
              TypeScript and multiple Amazon Bedrock AI models (Claude, Titan,
              etc).
            </li>
          </ul>
        }
      />

      {/* CS307 TA */}
      <ExperienceAccordion
        company="Purdue Computer Science"
        role="Teaching Assistant: CS 307, Software Engineering I"
        date="Aug 2024 – December 2024"
        location="West Lafayette, IN"
        techStack={[]}
        description={
          <ul>
            <li>
              Acted as both product owner and technical advisor, guiding teams
              on framework selection, database management, and design patterns
              while promoting best practices and Agile principles throughout
              their project development.
            </li>
            <li>
              Provided comprehensive product management and feedback on design
              documents, backlogs, project charters, and sprint plans, ensuring
              each team`&apos;`s project featured a well-defined architecture,
              realistic timelines, and manageable sprint cycles.
            </li>
          </ul>
        }
      />

      {/* FHLBC */}
      <ExperienceAccordion
        company="Federal Home Loan Bank of Chicago"
        role="Software Engineering Intern"
        date="May 2024 – Aug 2024"
        location="Chicago, IL"
        techStack={[
          "/icons/DotNet.png",
          "/icons/Java2.png",
          "/icons/C-Sharp.png",
          "/icons/docker.png",
          "/icons/Kubernetes-2.png",
          "/icons/aws.png",
          "/icons/Azure.png",
        ]}
        description={
          <ul>
            <li>
              Developed and enhanced complex FinTech applications in .NET, C#
              and Java with the bank’s modern engineering team, gaining
              experience with various tools and learning how to operate under an
              Agile software development cycle.
            </li>
            <li>
              Maintained the bank’s DevSecOps infrastructure using various
              tools, including Azure DevOps, Docker, Kubernetes, to support
              continuous integration and deployment (CI/CD) by building
              intuitive pipelines, increasing deployment speed by up to 20%.
            </li>
            <li>
              Presented detailed findings about how the bank could benefit from
              further AI/ML implementation to bank executives and board members,
              providing a detailed plan for how to plan, execute, and regulate
              various potential use cases.
            </li>
          </ul>
        }
      />

      <ExperienceAccordion
        company="Scale AI"
        role="Software Engineer - AI Consultant"
        date="Jan 2024 – Dec 2024"
        location="Remote"
        techStack={[
          "/icons/C-Sharp.png",
          "/icons/CPlusPlus.png",
          "/icons/Python.png",
          "/icons/Java2.png",
          "/icons/JavaScript.png",
        ]}
        description={
          <ul>
            <li>
              Enhanced the capabilities of complex machine learning models by
              developing software in Java, C/C++, Python, JavaScript,
              TypeScript, and C#, resulting in a 6% increase in model accuracy
              and improved performance.
            </li>
            <li>
              Evaluated, tested, and maintained software from coworkers,
              ensuring that language learning models were receiving accurate,
              well documented, and original code{" "}
            </li>
          </ul>
        }
      />
    </Stack>
  );
}
