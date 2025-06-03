import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Stack>
        <Link
          href="https://www.linkedin.com/in/matthewtwind/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "left",
          }}
        >
          <Image
            src="/linkedIn.svg"
            alt="LinkedIn"
            width={16}
            height={16}
            className={styles["filter-white"]}
          />
          <span style={{ marginLeft: "8px", color: "white" }}>LinkedIn</span>
        </Link>

        <Link
          href="https://github.com/mtwind"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "left",
          }}
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            width={16}
            height={16}
            className={styles["filter-white"]}
          />
          <span style={{ marginLeft: "8px", color: "white" }}>GitHub</span>
        </Link>

        <Link
          href="mailto:mtwind2003@gmail.com"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "left",
          }}
        >
          <EmailIcon
            color="action"
            sx={{ fontSize: 16 }}
            className={styles["filter-white"]}
          ></EmailIcon>
          <span style={{ marginLeft: "8px", color: "white" }}>Email</span>
        </Link>
      </Stack>
    </div>
  );
}
