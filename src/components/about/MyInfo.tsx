"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Card,
  CardMedia,
  Fade,
  IconButton,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

interface MyInfoProps {
  id: string;
  description: React.ReactNode;
  images: string[];
  textPosition: "left" | "right";
}

export default function MyInfo({
  id,
  description,
  images,
  textPosition,
}: MyInfoProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Animation timings
  const FADE_DURATION = 1000; // ms
  const IMAGE_INTERVAL = 10000; // ms

  const startImageRotation = useCallback(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Start a new interval
    intervalRef.current = setInterval(() => {
      setShowImage(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setShowImage(true);
      }, FADE_DURATION);
    }, IMAGE_INTERVAL);
  }, [images.length]);

  // Add manual navigation handlers
  const handleNext = () => {
    setShowImage(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setShowImage(true);
      startImageRotation(); // Reset timer on manual change
    }, FADE_DURATION);
  };

  const handlePrev = () => {
    setShowImage(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setShowImage(true);
      startImageRotation(); // Reset timer on manual change
    }, FADE_DURATION);
  };

  useEffect(() => {
    if (images.length > 1) {
      // Desynchronize timers with a random initial delay
      const randomDelay = Math.random() * 2000; // Random delay up to 2s
      const initialTimeout = setTimeout(() => {
        startImageRotation();
      }, randomDelay);

      // Cleanup function to clear timers when the component unmounts
      return () => {
        clearTimeout(initialTimeout);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [images.length, startImageRotation]);

  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        padding: 3,
        gap: 4,
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          order: { xs: 2, md: textPosition === "left" ? 1 : 2 },
        }}
      >
        <Typography variant="body1" component="div">
          {description}
        </Typography>
      </Box>

      {/* Image Section with Carousel Controls */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          order: { xs: 1, md: textPosition === "left" ? 2 : 1 },
          position: "relative", // Needed for positioning the buttons
          // Show buttons on hover
          "&:hover .nav-button": {
            opacity: 0.7,
          },
        }}
      >
        <Fade in={showImage} timeout={FADE_DURATION}>
          <Card
            key={currentImageIndex}
            sx={{
              width: "100%",
              height: { xs: 300, md: 400 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={images[currentImageIndex]}
              alt="Rotating image"
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Card>
        </Fade>

        {/* Carousel Buttons */}
        {images.length > 1 && (
          <>
            <IconButton
              className="nav-button"
              onClick={handlePrev}
              sx={{
                position: "absolute",
                top: "50%",
                left: 8,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                color: "white",
                opacity: 0,
                transition: "opacity 0.3s",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              className="nav-button"
              onClick={handleNext}
              sx={{
                position: "absolute",
                top: "50%",
                right: 8,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                color: "white",
                opacity: 0,
                transition: "opacity 0.3s",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );
}
