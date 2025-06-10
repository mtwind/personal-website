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
            <li>
              Gained proficiency in core operating systems concepts, including
              memory management, process scheduling, file systems, and
              concurrency.
            </li>
            <li>
              Implemented low-level programs to manage system resources and
              handle inter-process communication.
            </li>
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
            <li>
              Applied software engineering principles across the full
              development lifecycle, from design and implementation to testing
              and deployment.
            </li>
            <li>
              Collaborated in a team environment to build and deploy a
              full-stack mobile application using Dart, Flutter, and Firebase.
            </li>
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
            <li>
              Developed low-level software in C/C++ to directly interact with
              operating system internals and system hardware.
            </li>
            <li>
              Built system tools, including a custom shell and memory allocator,
              to understand core OS functionalities.
            </li>
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
            <li>
              Implemented and analyzed fundamental data structures and
              algorithms, including arrays, lists, trees, heaps, and graphs.
            </li>
            <li>
              Solved complex computational problems by applying algorithmic
              techniques such as sorting, searching, and dynamic programming in
              Java.
            </li>
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
            <li>
              Analyzed processor design and memory hierarchy, including
              pipelining, caching, and instruction-level parallelism.
            </li>
            <li>
              Designed and simulated hardware components to optimize for
              performance, cost, and power efficiency.
            </li>
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
            <li>
              Applied principles of logic, set theory, combinatorics, and graph
              theory to solve computational problems.
            </li>
            <li>
              Developed formal proofs and analyzed algorithmic complexity using
              discrete mathematical structures.
            </li>
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
            <li>
              Mastered fundamental and advanced concepts of the C programming
              language, including memory management, pointers, and data
              structures.
            </li>
            <li>
              Developed robust applications by applying structured programming
              principles and low-level system interaction.
            </li>
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
            <li>
              Designed and implemented software using object-oriented principles
              such as inheritance, polymorphism, and encapsulation in Java.
            </li>
            <li>
              Developed modular and reusable code through the application of
              design patterns and OOP best practices.
            </li>
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
            <li>
              Applied linear algebra concepts to solve problems in computer
              graphics, machine learning, and data analysis.
            </li>
            <li>
              Utilized vector spaces, matrices, and eigenvalues to model and
              manipulate complex systems.
            </li>
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
            <li>
              Analyzed functions of multiple variables to solve optimization
              problems and model real-world phenomena.
            </li>
            <li>
              Mastered techniques such as partial differentiation, multiple
              integration, and vector analysis.
            </li>
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
            <li>
              Applied statistical methods to analyze and interpret data,
              including hypothesis testing and regression analysis.
            </li>
            <li>
              Utilized R for data visualization, statistical modeling, and to
              derive insights from complex datasets.
            </li>
          </ul>
        }
        defaultExpanded={false}
      />
    </Stack>
  );
}
