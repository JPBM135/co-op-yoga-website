"use client";

import Image from "next/image";
import styles from "./sectionFour.module.css";
import yoga1 from "./follow-yoga-1.png";
import yoga2 from "./follow-yoga-2.png";
import yoga3 from "./follow-yoga-3.png";
import yoga4 from "./follow-yoga-4.png";
import { useIsScreenWide } from "../../utils/isScreenWideHook";
import { safeWindow } from "../../utils/safeWindow";
import { useIsElementVisible } from "../../utils/isElementVisible";

export function SectionFour() {
  const _window = safeWindow();
  const element = _window?.document.getElementById("section4");
  const isVisible = useIsElementVisible(element!);

  let returnContext;

  const isScreenWide = useIsScreenWide();

  if (isScreenWide) {
    return (
      <section id="section4" className={styles.section}>
        <div className={styles.flex}>
          <div className={styles.text_part}>
            <Image
              src={yoga1}
              alt={"yoga1"}
              className={isVisible ? styles.scroll_yoga1 : ""}
            ></Image>
            <div className={styles.title}>
              <h2>
                Follow Us On <br></br>Instagram
              </h2>
              <h2 className={styles.gradient}>#YOGA</h2>
              <div className={styles.button}>
                <p>Follow</p>
                <p>&#10132;</p>
              </div>
            </div>
            <Image
              src={yoga2}
              alt={"yoga2"}
              className={isVisible ? styles.scroll_yoga2 : ""}
            ></Image>
          </div>
          <div className={styles.image_part}>
            <Image
              src={yoga3}
              alt={"yoga3"}
              className={isVisible ? styles.scroll_yoga3 : ""}
            ></Image>
            <Image
              src={yoga4}
              alt={"yoga4"}
              className={isVisible ? styles.scroll_yoga4 : ""}
            ></Image>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="section4" className={styles.section}>
      <div className={styles.flex}>
        <div className={styles.text_part}>
          <div className={styles.title}>
            <h2>Follow Us On Instagram</h2>
            <h2 className={styles.gradient}>#YOGA</h2>
          </div>
          <div className={styles.button}>
            <p>Follow</p>
            <p>&#10132;</p>
          </div>
        </div>
        <div className={styles.image_part}>
          <div className={styles.image_top_div}>
            <Image
              src={yoga1}
              alt={"yoga1"}
              className={isVisible ? styles.scroll_yoga1 : ""}
            ></Image>
            <Image
              src={yoga2}
              alt={"yoga2"}
              className={isVisible ? styles.scroll_yoga2 : ""}
            ></Image>
          </div>
          <Image
            src={yoga3}
            alt={"yoga3"}
            className={isVisible ? styles.scroll_yoga3 : ""}
          ></Image>
          <Image
            src={yoga4}
            alt={"yoga4"}
            className={isVisible ? styles.scroll_yoga4 : ""}
          ></Image>
        </div>
      </div>
    </section>
  );
}
