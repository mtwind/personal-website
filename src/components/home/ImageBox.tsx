import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";

interface ImageBoxProps {
  index: number;
  src: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ index, src }) => {
  const ANIMATION_DURATION = 700; // Animation speed in ms
  const SLIDE_AMOUNT = "20px"; // How far the image slides

  const [displaySrc, setDisplaySrc] = useState<string>(src);

  // The animation state now holds both opacity and transform properties
  const [animationStyles, setAnimationStyles] = useState({
    opacity: 1,
    transform: "translateX(0)",
  });

  const isInitialMount = useRef(true);
  // Ref to hold timer IDs for proper cleanup
  const timers = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // 1. Start the fade-out: move current image to the left
    setAnimationStyles({
      opacity: 0,
      transform: `translateX(-${SLIDE_AMOUNT})`,
    });

    // 2. Set a timer for when the fade-out is complete
    const fadeOutTimer = setTimeout(() => {
      // 3. Swap the image source while it's invisible
      setDisplaySrc(src);

      // 4. Reposition the new image to the right, ready to slide in
      setAnimationStyles({
        opacity: 0,
        transform: `translateX(${SLIDE_AMOUNT})`,
      });

      // 5. Use a second, tiny timeout to allow the browser to apply the
      //    repositioning before starting the fade-in animation.
      const fadeInTimer = setTimeout(() => {
        // 6. Animate the new image in by moving it to the center
        setAnimationStyles({
          opacity: 1,
          transform: "translateX(0)",
        });
      }, 20); // 20ms delay is enough

      timers.current.push(fadeInTimer);
    }, ANIMATION_DURATION);

    timers.current.push(fadeOutTimer);

    // Cleanup function to clear all timers if the component unmounts
    return () => {
      timers.current.forEach((timerId) => clearTimeout(timerId));
      timers.current = [];
    };
  }, [src]);

  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "16 / 9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.main",
        // Apply the animation state directly
        opacity: animationStyles.opacity,
        transform: animationStyles.transform,
        // The transition now applies to both opacity and transform
        transition: `opacity ${ANIMATION_DURATION}ms ease-in-out, transform ${ANIMATION_DURATION}ms ease-in-out`,
      }}
    >
      {displaySrc === "/matthew-wind.png" ? (
        <Stack>
          <Typography
            sx={{
              fontSize: 50,
              fontWeight: "bold",
              color: "primary.contrastText",
              textAlign: "center",
            }}
          >
            Matthew Wind
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 25,
              color: "primary.contrastText",
              textAlign: "center",
            }}
          >
            Software Engineering
          </Typography>
        </Stack>
      ) : (
        <Image
          src={displaySrc}
          alt={`Grid ${index + 1}`}
          width={1000}
          height={563}
          style={{
            width: "95%",
            height: "95%",
            objectFit: "cover",
            borderRadius: 8,
          }}
          sizes="(max-width: 600px) 100vw, 33vw"
        />
      )}
    </Box>
  );
};

export default ImageBox;
