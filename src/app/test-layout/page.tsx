import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function TestLayout() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Welcome to the test page</h1>

          <h2>
            Go <Link href="home/">home </Link>
          </h2>
        </div>
      </div>
    </>
  );
}
