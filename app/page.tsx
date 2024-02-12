"use client";

import styles from "./page.module.css";
import { SectionOne } from "./components/SectionOne/SectionOne";
import { SectionTwo } from "./components/SectionTwo/SectionTwo";
import { SectionThree } from "./components/SectionThree/SectionThree";
import { SectionFour } from "./components/SectionFour/SectionFour";
import { SectionFive } from "./components/SectionFive/SectionFive";
import { SectionZero } from "./components/SectionZero/SectionZero";
import { useIsScreenWide } from "./utils/isScreenWideHook";

export default function Home() {
  const isScreenWide = useIsScreenWide();

  return (
    <main className={styles.main}>
      <SectionZero isScreenWide={isScreenWide} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </main>
  );
}
