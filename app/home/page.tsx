// "use client";

import Head from "next/head";
import styles from "@/app/styles/Home.module.css";
import Link from "next/link";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";

export default function Home() {
  return (
    <>
      <Navigation></Navigation>

      <div className={styles.container}>
        <Head>
          <title> Matthew Wind | SWE </title>
          <link rel="icon" href="/personal emoji.png" />
        </Head>

        <main>
          <h1>Welcome to mtwind.xyz!</h1>
        </main>

        <Footer></Footer>

        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </>
  );
}
