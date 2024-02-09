import styles from "./page.module.css";
import { SectionOne } from "./components/SectionOne/SectionOne";
import { SectionTwo } from "./components/SectionTwo/SectionTwo";
import { SectionThree } from "./components/SectionThree/SectionThree";
import { SectionFour } from "./components/SectionFour/SectionFour";
import { SectionFive } from "./components/SectionFive/SectionFive";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </main>
  );
}
