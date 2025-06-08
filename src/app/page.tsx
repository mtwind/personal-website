"use client";

import ImageGrid from "@/components/home/ImageGrid";
import Content from "@/components/home/Content";
import { useTheme, useMediaQuery, Divider } from "@mui/material";

export default function Home() {
  const theme = useTheme();

  // Use MUI's media query hooks to determine the screen size.
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isSmall = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 900px

  // Determine which size to pass to the ImageGrid component.
  // Defaults to 2 (the largest, 6-image grid).
  let size: 0 | 1 | 2 = 2;
  if (isMobile) {
    size = 0; // 3-image grid
  } else if (isSmall) {
    size = 1; // 4-image grid
  }

  return (
    <>
      {size === 0 ? (
        <>
          <Divider
            sx={{
              borderBottomWidth: 3, // thickness (e.g., 3px)
              borderColor: "primary.main", // color (use theme color or hex)
            }}
          />
          <Content size={size} />
          <ImageGrid size={size} />
        </>
      ) : (
        <>
          <Divider
            sx={{
              borderBottomWidth: 3, // thickness (e.g., 3px)
              borderColor: "primary.main", // color (use theme color or hex)
            }}
          />
          <ImageGrid size={size} />
          <Content size={size} />
        </>
      )}
    </>
  );
}
