"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navigation() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "secondary.main",
        color: "primary.contrastText",
        justifyContent: "center",
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            backgroundColor: "secondary.main",
            color: "primary.contrastText",
            padding: 2,
            justifyContent: "center",
          }}
        ></Toolbar>
      </AppBar>
    </Box>
  );
}
