import Image from "next/image";
import yoga1 from "./routine-yoga-1.png";
import yoga2 from "./routine-yoga-2.png";
import box1 from "./Box routine 1.png";
import box2 from "./Box routine 2.png";
import styles from "./sectionThree.module.css";

export function SectionThree() {
  return (
    <section>
      <div className={styles.flex}>

        <h2 className={styles.title}>Anytime, Any Place, Any Workout</h2>
        <p className={styles.content}>
          Take your routine at any time of your day, with the new videos and with the teachers who will guide you.
        </p>
        <div className={styles.button}>
          <span>Get Started Free &#10132;</span>
        </div>
      
      <div className={styles.image_part}>
        <div className={styles.top_image}>
          <div className={styles.image_div1}>
            <Image src={yoga1} width={250} height={171.88} alt={"routine-yoga-1"}></Image>
            <Image src={box1} alt={"box1"}  className={styles.box1}></Image>
          </div>
        </div>
        <div className={styles.bottom_image}>
          <div className={styles.image_div2}>
            <Image src={yoga2} width={250} height={171.88} alt={"routine-yoga-2"} className={styles.image2}></Image>
            <Image src={box2} alt={"box2"} className={styles.box2}></Image>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}
