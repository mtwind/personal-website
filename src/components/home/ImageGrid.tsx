import ImageBox from "@/components/home/ImageBox";
import { Box, Container } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

// Define the structure for an image with its link
interface ImageData {
  src: string;
  link: string;
  description?: string;
}

// Combine all images and their corresponding links into one structure
const allImageData: ImageData[] = [
  {
    src: "/home/capital-one.png",
    link: "/work#experience-capital-one",
    description: "My Internship at Capital One",
  },
  {
    src: "/home/chicago.png",
    link: "/about#intro",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/ski.png",
    link: "/about#travel",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/stamford-bridge.png",
    link: "/about#sports",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/shopwave.png",
    link: "/work#experience-shopwave",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/poker.png",
    link: "/about#strategy",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/bqfg.png",
    link: "/work#project-algorithmic-trading-strategy",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/purdue-cs.png",
    link: "/work#experience-purdue-computer-science",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/fhlbc.png",
    link: "/work#experience-federal-home-loan-bank",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/coding.png",
    link: "/work",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/habitat.png",
    link: "/about#volunteering",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/london.png",
    link: "/about#travel",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/purdue.png",
    link: "/about#education",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/neuschwanstein.png",
    link: "/about#travel",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/soccer.png",
    link: "/about#sports",
    // description: "My Internship at Capital One",
  },
  {
    src: "/home/chelsea-logo.png",
    link: "/about#sports",
    // description: "My Internship at Capital One",
  },
];

// Helper to create the initial image sets for the config
const getInitialImages = (paths: string[]): ImageData[] => {
  return paths.map(
    (path) =>
      allImageData.find((data) => data.src === path) || { src: "", link: "" }
  );
};

const layoutConfig = {
  // size: 0 (3 images, 1x3 layout)
  0: {
    initialImages: getInitialImages([
      "/home/capital-one.png",
      "/home/chicago.png",
      "/home/ski.png",
    ]),
    rotationOrder: [0, 1, 2],
    gridStyles: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(3, 1fr)",
    },
  },
  // size: 1 (4 images, 2x2 layout)
  1: {
    initialImages: getInitialImages([
      "/home/capital-one.png",
      "/home/chicago.png",
      "/home/ski.png",
      "/home/stamford-bridge.png",
    ]),
    rotationOrder: [0, 2, 3, 1],
    gridStyles: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
    },
  },
  // size: 2 (6 images, 3x2 layout)
  2: {
    initialImages: getInitialImages([
      "/home/capital-one.png",
      "/home/chicago.png",
      "/home/ski.png",
      "/home/stamford-bridge.png",
      "/home/shopwave.png",
      "/home/poker.png",
    ]),
    rotationOrder: [0, 3, 4, 5, 2, 1],
    gridStyles: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
    },
  },
};

interface ImageGridProps {
  size?: 0 | 1 | 2;
}

const ImageGrid: React.FC<ImageGridProps> = ({ size = 2 }) => {
  const config = layoutConfig[size];
  const [currentImages, setCurrentImages] = useState<ImageData[]>(
    config.initialImages
  );
  const rotationCounters = useRef({
    imageSourceIndex: config.initialImages.length,
    gridPositionIndex: 0,
  });

  useEffect(() => {
    setCurrentImages(config.initialImages);
    rotationCounters.current = {
      imageSourceIndex: config.initialImages.length,
      gridPositionIndex: 0,
    };
  }, [size, config.initialImages]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentGridIndex = rotationCounters.current.gridPositionIndex;
      const currentSourceIndex = rotationCounters.current.imageSourceIndex;

      const gridPositionToChange = config.rotationOrder[currentGridIndex];
      const newImageData = allImageData[currentSourceIndex];

      setCurrentImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[gridPositionToChange] = newImageData;
        return newImages;
      });

      rotationCounters.current.gridPositionIndex =
        (currentGridIndex + 1) % config.rotationOrder.length;
      rotationCounters.current.imageSourceIndex =
        (currentSourceIndex + 1) % allImageData.length;
    }, 5000);

    return () => clearInterval(intervalId);
  }, [config.rotationOrder]);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        padding: 0,
        margin: 0,
        backgroundColor: "secondary.main",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1600px",
          border: {
            xs: 0,
            md: `4px solid ${"primary.main"}`,
          },
          borderTop: 0,
          borderBottom: 0,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: 1,
            width: "100%",
            ...config.gridStyles,
          }}
        >
          {currentImages.map((imageData, idx) => (
            <ImageBox
              key={idx}
              index={idx}
              src={imageData.src}
              link={imageData.link}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ImageGrid;
