import styles from "./page.module.css";
import { SectionOne } from "./components/SectionOne/SectionOne";
import { SectionTwo } from "./components/SectionTwo/SectionTwo";
import { SectionThree } from "./components/SectionThree/SectionThree";
import { SectionFour } from "./components/SectionFour/SectionFour";
import { SectionFive } from "./components/SectionFive/SectionFive";
import Image from "next/image";
import home_yoga from "./home-yoga.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={home_yoga} alt="Picture of the author" />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </main>
  );
}
