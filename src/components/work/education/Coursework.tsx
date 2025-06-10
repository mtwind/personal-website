import CourseworkAccordion from "@/components/work/education/CourseworkAccordion";
import { Stack } from "@mui/material";

export default function Education() {
  return (
    <Stack spacing={2}>
      <CourseworkAccordion
        courseTitle="Operating Systems"
        date="Fall 2024"
        techStack={["/icons/C3.png", "/icons/CPlusPlus.png"]}
        description={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
        defaultExpanded={false}
      />

      <CourseworkAccordion
        courseTitle="Software Engineering I"
        date="Spring 2024"
        techStack={[
          "/icons/Dart.png",
          "/icons/Flutter.png",
          "/icons/Firebase.png",
        ]}
        description={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
        defaultExpanded={false}
      />

      <CourseworkAccordion
        courseTitle="Systems Programming"
        date="Spring 2024"
        techStack={["/icons/C3.png", "/icons/CPlusPlus.png"]}
        description={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
        defaultExpanded={false}
      />

      <CourseworkAccordion
        courseTitle="Data Structures & Algorithms"
        date="Fall 2023"
        techStack={["/icons/Java2.png"]}
        description={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
        defaultExpanded={false}
      />

      <CourseworkAccordion
        courseTitle="Computer Architecture"
        date="Fall 2023"
        techStack={["/icons/C3.png", "/icons/CPlusPlus.png"]}
        description={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
        defaultExpanded={false}
      />

      <CourseworkAccordion
        courseTitle="Discrete Math"
        date="Spring 2023"
        techStack={[]}
        description={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
        defaultExpanded={false}
      />

      <CourseworkAccordion
        courseTitle="Programming in C"
        date="Spring 2023"
        techStack={["/icons/C3.png"]}
        description={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
        defaultExpanded={false}
      />

      <CourseworkAccordion
        courseTitle="Object-Oriented Programming"
        date="Fall 2022"
        techStack={["/icons/Java2.png"]}
        description={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
        defaultExpanded={false}
      />

      <CourseworkAccordion
        courseTitle="Linear Algebra"
        date="Spring 2023"
        techStack={[]}
        description={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
        defaultExpanded={false}
      />

      <CourseworkAccordion
        courseTitle="Multivariable Calculus"
        date="Spring 2023"
        techStack={[]}
        description={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
        defaultExpanded={false}
      />

      <CourseworkAccordion
        courseTitle="Intro to Statistics"
        date="Fall 2023"
        techStack={["/icons/R.png"]}
        description={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
        defaultExpanded={false}
      />
    </Stack>
  );
}
