import Image from "next/image";
import yoga1 from "./routine-yoga-1.png";
import yoga2 from "./routine-yoga-2.png";
import box1 from "./ri_play-circle-fill.png";
import box2 from "./ri_run-fill.png";
import styles from "./sectionThree.module.css";
import { safeWindow } from "../../utils/safeWindow";
import { useIsElementVisible } from "../../utils/isElementVisible";

export function SectionThree() {
  const _window = safeWindow();
  const element = _window?.document.getElementById("section3");
  const isVisible = useIsElementVisible(element!);

  return (
    <section className={styles.section} id="section3">
      <div className={styles.flex}>
        <div className={styles.text_part}>
          <h2 className={styles.title}>Anytime, Any Place, Any Workout</h2>
          <p className={styles.content}>
            Take your routine at any time of your day, with the new videos and
            with the teachers who will guide you.
          </p>
          <div className={styles.button}>
            <span>Get Started Free &#10132;</span>
          </div>
        </div>

        <div className={styles.image_part}>
          <div className={styles.top_image}>
            <div className={styles.image_div1}>
              <Image
                src={yoga1}
                className={styles.image1}
                alt={"routine-yoga-1"}
              ></Image>
              <div className={styles.box1}>
                <Image src={box1} alt={"box1"}></Image>
                <span>High Quality Video</span>
              </div>
            </div>
          </div>
          <div className={styles.bottom_image}>
            <div className={styles.image_div2}>
              <Image
                src={yoga2}
                alt={"routine-yoga-2"}
                className={styles.image2}
              ></Image>
              <div className={styles.box2}>
                <Image src={box2} alt={"box2"}></Image>
                <span>Professional Trainer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
