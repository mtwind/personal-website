import React, { useState, useEffect, useRef } from "react";
import { Container, Box } from "@mui/material";
import ImageBox from "@/components/home/ImageBox";

// LOGIC CHANGE: A new rotation order for the 5 available slots (0, 2, 3, 4, 5).
// The permanent box at index 1 is excluded.
const ROTATION_ORDER = [0, 2];

const ImageGrid: React.FC = () => {
  const all_images: string[] = [
    "/home/capital-one.png", // 0
    "/home/chicago.png", // 1
    "/home/ski.png", // 2
    "/home/stamford-bridge.png", // 3
    "/home/shopwave.png", // 4
    "/home/poker.png", // 5
    "/home/bqfg.png", // 6
    "/home/purdue-cs.png", // 7
    "/home/fhlbc.png", // 8
    "/home/coding.png", // 9
    "/home/habitat.png", // 10
    "/home/london.png", // 11
    "/home/purdue.png", // 12
    "/home/neuschwanstein.png", // 13
    "/home/soccer.png", // 14
    "/home/chelsea-logo.png", // 15
  ];

  // STATE CHANGE: The initial grid now has 6 items. The permanent box
  // is now at index 1.
  const [current_images, setCurrentImages] = useState<string[]>([
    "/home/capital-one.png", // Index 0
    "/matthew-wind.png", // Index 1 (Permanent)
    "/home/chicago.png", // Index 2
  ]);

  const rotationCounters = useRef({
    imageSourceIndex: 2,
    gridPositionIndex: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentGridIndex = rotationCounters.current.gridPositionIndex;
      const currentSourceIndex = rotationCounters.current.imageSourceIndex;

      const gridPositionToChange = ROTATION_ORDER[currentGridIndex];
      const newImage = all_images[currentSourceIndex];

      setCurrentImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[gridPositionToChange] = newImage;
        return newImages;
      });

      rotationCounters.current.gridPositionIndex =
        (currentGridIndex + 1) % ROTATION_ORDER.length;
      rotationCounters.current.imageSourceIndex =
        (currentSourceIndex + 1) % all_images.length;
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
        borderColor: "secondary.main",
      }}
    >
      <Box
        sx={{
          display: "grid",
          // LAYOUT CHANGE: 3 columns and now 2 rows.
          gridTemplateColumns: "repeat(1, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: 1,
          borderColor: "primary.main",
          width: "100%",
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
