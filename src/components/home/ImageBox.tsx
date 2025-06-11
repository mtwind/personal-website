import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface ImageBoxProps {
  index: number;
  src: string;
  link?: string;
  description?: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  index,
  src,
  link,
  description,
}) => {
  const ANIMATION_DURATION = 700;
  const SLIDE_AMOUNT = "20px";

  const [displaySrc, setDisplaySrc] = useState<string>(src);
  const [animationStyles, setAnimationStyles] = useState({
    opacity: 1,
    transform: "translateX(0)",
  });

  const isInitialMount = useRef(true);
  const timers = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    setAnimationStyles({
      opacity: 0,
      transform: `translateX(-${SLIDE_AMOUNT})`,
    });

    const fadeOutTimer = setTimeout(() => {
      setDisplaySrc(src);
      setAnimationStyles({
        opacity: 0,
        transform: `translateX(${SLIDE_AMOUNT})`,
      });

      const fadeInTimer = setTimeout(() => {
        setAnimationStyles({
          opacity: 1,
          transform: "translateX(0)",
        });
      }, 20);
      timers.current.push(fadeInTimer);
    }, ANIMATION_DURATION);
    timers.current.push(fadeOutTimer);

    return () => {
      timers.current.forEach((timerId) => clearTimeout(timerId));
      timers.current = [];
    };
  }, [src]);

  const imageContent = (
    // This Box now acts as the relative container for the description overlay
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.main",
      }}
    >
      {displaySrc === "/matthew-wind.png" ? (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
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
      {/* THE NEW DESCRIPTION OVERLAY */}
      {description && (
        <Box
          className="description-overlay"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // More translucent fill color
            color: "primary.contrastText",
            p: 1.5, // Padding for the text
            opacity: 0, // Start invisible
            transition: "opacity 0.3s ease-in-out",
            pointerEvents: "none", // Ensures the overlay doesn't block clicks
          }}
        >
          <Typography variant="body2" textAlign="center">
            {description}
          </Typography>
        </Box>
      )}
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "16 / 9",
        position: "relative",
        opacity: animationStyles.opacity,
        transform: animationStyles.transform,
        transition: `all 300ms ease-in-out`, // Shortened transition for hover
        borderRadius: 1,
        boxShadow: (theme) => theme.shadows[2],
        cursor: link ? "pointer" : "default",
        "&:hover": {
          transform: `scale(1.03) translateY(-2px)`,
          boxShadow: (theme) => theme.shadows[6],
          zIndex: 1,
          "& .description-overlay": {
            opacity: 1, // Make the description visible on hover
          },
        },
      }}
    >
      {link ? (
        <Link href={link} passHref style={{ textDecoration: "none" }}>
          {imageContent}
        </Link>
      ) : (
        imageContent
      )}
    </Box>
  );
};

export default ImageBox;
