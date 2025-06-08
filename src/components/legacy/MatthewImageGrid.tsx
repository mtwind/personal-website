import React, { useState, useEffect, useRef } from "react";
import { Container, Box } from "@mui/material";
import ImageBox from "@/components/home/ImageBox";

// Configuration object to hold settings for each grid size
const layoutConfig = {
  // size: 0 (3 images, 1x3 layout)
  0: {
    initialImages: [
      "/home/capital-one.png", // Index 0
      "/matthew-wind.png", // Index 1 (Permanent)
      "/home/chicago.png", // Index 2
    ],
    rotationOrder: [0, 2],
    gridStyles: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(3, 1fr)",
    },
  },
  // size: 1 (4 images, 2x2 layout)
  1: {
    initialImages: [
      "/home/capital-one.png", // Index 0
      "/matthew-wind.png", // Index 1 (Permanent)
      "/home/chicago.png", // Index 2
      "/home/ski.png", // Index 3
    ],
    rotationOrder: [0, 2, 3],
    gridStyles: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
    },
  },
  // size: 2 (6 images, 3x2 layout)
  2: {
    initialImages: [
      "/home/capital-one.png", // Index 0
      "/matthew-wind.png", // Index 1 (Permanent)
      "/home/chicago.png", // Index 2
      "/home/ski.png", // Index 3
      "/home/stamford-bridge.png", // Index 4
      "/home/shopwave.png", // Index 5
    ],
    rotationOrder: [0, 2, 3, 4, 5],
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
  // Use the 'size' prop to get the correct configuration
  const config = layoutConfig[size];

  const all_images: string[] = [
    "/home/capital-one.png",
    "/home/chicago.png",
    "/home/ski.png",
    "/home/stamford-bridge.png",
    "/home/shopwave.png",
    "/home/poker.png",
    "/home/bqfg.png",
    "/home/purdue-cs.png",
    "/home/fhlbc.png",
    "/home/coding.png",
    "/home/habitat.png",
    "/home/london.png",
    "/home/purdue.png",
    "/home/neuschwanstein.png",
    "/home/soccer.png",
    "/home/chelsea-logo.png",
  ];

  // Initialize the grid with the correct set of images based on size
  const [current_images, setCurrentImages] = useState<string[]>(
    config.initialImages
  );

  const rotationCounters = useRef({
    imageSourceIndex: 8,
    gridPositionIndex: 0,
  });

  // This effect resets the grid and counters if the size prop changes
  useEffect(() => {
    setCurrentImages(config.initialImages);
    rotationCounters.current = { imageSourceIndex: 8, gridPositionIndex: 0 };
  }, [size, config.initialImages]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentGridIndex = rotationCounters.current.gridPositionIndex;
      const currentSourceIndex = rotationCounters.current.imageSourceIndex;

      const gridPositionToChange = config.rotationOrder[currentGridIndex];
      const newImage = all_images[currentSourceIndex];

      setCurrentImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[gridPositionToChange] = newImage;
        return newImages;
      });

      // BUG FIX: The modulo now correctly uses the length of the specific rotation order array
      rotationCounters.current.gridPositionIndex =
        (currentGridIndex + 1) % config.rotationOrder.length;
      rotationCounters.current.imageSourceIndex =
        (currentSourceIndex + 1) % all_images.length;
    }, 5000);

    return () => clearInterval(intervalId);
  }, [config.rotationOrder, all_images]);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100vw",
        maxWidth: "100vw",
        padding: 0,
        margin: 0,
        backgroundColor: "secondary.main",
        border: 4,
        borderColor: "primary.main",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: 1,
          width: "100%",
          // Apply grid styles dynamically based on the size prop
          ...config.gridStyles,
        }}
      >
        {current_images.map((src, idx) => (
          <ImageBox key={idx} index={idx} src={src} />
        ))}
      </Box>
    </Container>
  );
};

export default ImageGrid;
