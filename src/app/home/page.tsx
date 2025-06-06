import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Welcome to mtwind.xyz!</h1>

          <h2>
            Visit <Link href="/test-layout/"> test page </Link>
          </h2>
        </div>
      </div>
    </>
  );
}
