import React, { useState, useEffect, useRef } from "react";
import { Container, Box } from "@mui/material";
import ImageBox from "@/components/home/ImageBox";

// Configuration object to hold settings for each grid size
const layoutConfig = {
  // size: 0 (3 images, 1x3 layout)
  0: {
    initialImages: [
      "/home/capital-one.png", // Index 0
      "/home/chicago.png", // Index 1
      "/home/ski.png", // Index 2
    ],
    rotationOrder: [0, 1, 2],
    gridStyles: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(3, 1fr)",
    },
  },
  // size: 1 (4 images, 2x2 layout)
  1: {
    initialImages: [
      "/home/capital-one.png", // Index 0
      "/home/chicago.png", // Index 1
      "/home/ski.png", // Index 2
      "/home/stamford-bridge.png", // Index 3
    ],
    rotationOrder: [0, 2, 3, 1],
    gridStyles: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
    },
  },
  // size: 2 (6 images, 3x2 layout)
  2: {
    initialImages: [
      "/home/capital-one.png", // Index 0
      "/home/chicago.png", // Index 1
      "/home/ski.png", // Index 2
      "/home/stamford-bridge.png", // Index 3
      "/home/shopwave.png", // Index 4
      "/home/poker.png", // Index 5
    ],
    rotationOrder: [0, 2, 3, 4, 5, 1],
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

  const [current_images, setCurrentImages] = useState<string[]>(
    config.initialImages
  );

  const rotationCounters = useRef({
    imageSourceIndex: 8,
    gridPositionIndex: 0,
  });

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
        // THE FIX IS HERE:
        // We still take up the full viewport width...
        width: "100vw",
        // ...but the content inside will be constrained and centered.
        display: "flex",
        justifyContent: "center",
        padding: 0,
        margin: 0,
        backgroundColor: "secondary.main",
      }}
    >
      {/* This inner Box is now what gets the border and max-width */}
      <Box
        sx={{
          width: "100%",
          // Set a maximum width. On screens wider than this, padding will appear.
          maxWidth: "1600px",
          border: {
            // Apply side borders only, not top/bottom
            xs: 0, // No border on mobile
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
          {current_images.map((src, idx) => (
            <ImageBox key={idx} index={idx} src={src} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ImageGrid;
