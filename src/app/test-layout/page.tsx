"use client";

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Typography, Container } from "@mui/material";
import ImageGrid from "@/components/legacy/MatthewImageGrid";

export default function TestLayout() {
  return (
    <>
      <Container
        sx={{
          minHeight: "100vh",
          padding: "0 0.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageGrid></ImageGrid>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Welcome to the test page
        </Typography>
      </Container>
    </>
  );
}
