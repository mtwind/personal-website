import ProjectAccordion from "@/components/work/projects/ProjectAccordion";
import { Stack } from "@mui/material";

export default function Projects() {
  return (
    <Stack spacing={2}>
      {/* Portfolio Website */}
      <ProjectAccordion
        projectName="Portfolio Website"
        githubLink="https://github.com/mtwind/personal-website" // Replace with your actual repo link
        organization="Personal Project"
        date="June 2025 – Present"
        techStack={[
          "/icons/React.png",
          "/icons/TypeScript.png",
          "/icons/JavaScript.png",
          "/icons/Nextjs.png",
          "/icons/MaterialUI.png",
          "/icons/Vercel.png",
        ]}
        description={
          <ul>
            <li>
              Multi page portfolio application built and designed from scratch
              with React, Material UI, NextJS, and Vercel.
            </li>
            <li>Thanks for coming!</li>
          </ul>
        }
        defaultExpanded={false}
      />

      {/* BQFG Online Learning */}
      <ProjectAccordion
        projectName="Online Trading: Adaptive Algorithms"
        githubLink="https://github.com/Boiler-Quant/bqfg-online-learning/tree/main" // Replace with your actual repo link
        organization="Boiler Quant Finance Group"
        date="Oct 2024 – Dec 2024"
        techStack={["/icons/Python.png", "/icons/VowpalWabbit.png"]}
        description={
          <ul>
            <li>
              Implemented an evolving Machine Leaning/Deep Learning trading
              algorithm through that learns on-the-go and adapts in real-time to
              ever changing financial markets.
            </li>
            <li>
              Utilized an online learning library, Vowpal Wabbit, to interpret
              advanced data on volatile energy markets in Texas
            </li>
          </ul>
        }
      />

      {/* BQFG Analyst Assignment */}
      <ProjectAccordion
        projectName="Online Trading: Adaptive Algorithms"
        githubLink="https://github.com/mtwind/Analyst-Assignment"
        organization="Boiler Quant Finance Group"
        date="Oct 2024"
        techStack={[
          "/icons/Python.png",
          "/icons/NumPy.png",
          "/icons/Pandas.png",
        ]}
        description={
          <ul>
            <li>
              Developed and implemented a quantitative trading strategy by
              combining the Parabolic Stop and Reverse (PSAR) and Relative
              Strength Index (RSI) indicators, achieving returns of up to 70%
              and a Sharpe Ratio of 2.7.
            </li>
            <li>
              Conducted comprehensive backtesting on multiple tickers (including
              AMZN, TSLA, GOOGL) over a 4-year period (2020-2024) to validate
              strategy performance.
            </li>
            <li>
              Evaluated strategy effectiveness using the Sharpe Ratio and
              Information Ratio to measure risk-adjusted returns against the S&P
              500 benchmark.
            </li>
            <li>
              Engineered the complete strategy and analysis in Python,
              leveraging libraries such as yfinance, pandas, numpy, and
              matplotlib for data retrieval, manipulation, and visualization.
            </li>
          </ul>
        }
      />

      {/* Explorio */}
      <ProjectAccordion
        projectName="Explorio"
        // githubLink="https://github.com/PaigeLorenz/Explorio"
        organization="Purdue CS"
        date="Jan 2024 – May 2024"
        techStack={[
          "/icons/Dart.png",
          "/icons/Flutter.png",
          "/icons/Firebase.png",
        ]}
        description={
          <ul>
            <li>
              Orchestrated and guided a dynamic team in the full-stack software
              development life cycle to deliver a mobile and web application,
              designed to generate detailed itineraries for any vacation based
              on user preferences through Flutter and Firebase.
            </li>
            <li>
              Integrated a diverse array of APIs into the backend
              infrastructure, facilitating real-time access to an extensive
              range of travel options including flights, hotels, restaurants,
              and local experiences.
            </li>
          </ul>
        }
      />

      {/* BoilerLiving */}
      <ProjectAccordion
        projectName="Boiler Living X"
        githubLink="https://github.com/Andrewtho907/BoilerLiving-JS"
        organization="BoilerMake X Hackathon"
        date="Jan 2023"
        techStack={[
          "/icons/JavaScript.png",
          "/icons/TypeScript.png",
          "/icons/HTML5.png",
          "/icons/CSS3.png",
          "/icons/Firebase.png",
        ]}
        description={
          <ul>
            <li>
              Spearheaded the creation of an innovative website aimed at
              simplifying the student housing search during Purdue&apos;s
              premier hackathon event, using Firebase to optimize data
              management and performance.
            </li>
            <li>
              Engineered an intuitive frontend using JavaScript, HTML, and CSS,
              ensuring seamless accessibility to all features.
            </li>
          </ul>
        }
      />

      {/* Java Marketplace */}
      <ProjectAccordion
        projectName="Java Marketplace"
        githubLink="https://github.com/mtwind/Project-5"
        organization="Purdue CS"
        date="Oct 2022 – Dec 2022"
        techStack={["/icons/Java.png"]}
        description={
          <ul>
            <li>
              Developed a marketplace application strictly using Java, offering
              a dynamic experience through an intricate GUI.
            </li>
            <li>
              Ensured high scalability and accessibility by employing advanced
              network I/O techniques and robust synchronization mechanisms,
              enabling concurrent access for multiple clients across different
              systems.
            </li>
          </ul>
        }
      />
    </Stack>
  );
}
