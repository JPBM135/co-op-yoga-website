/*use client*/

import Image from "next/image";
import styles from "./sectionFour.module.css"
import yoga1 from "./follow-yoga-1.png";
import yoga2 from "./follow-yoga-2.png";
import yoga3 from "./follow-yoga-3.png";
import yoga4 from "./follow-yoga-4.png";
import { useState, useRef, useEffect } from "react";

export function SectionFour() {

  // const [isInViewport, setIsInViewport] = useState(false);
  // const ref = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (!ref.current) return; 

  //   const callback = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         // appeared 
  //         setIsInViewport(true);
  //       } else {
  //         // disappeard
  //         setIsInViewport(false);
  //       }
  //     });
  //   };

  //   const options = { root: null, rootMargin: "0px", threshold: 0 };

  //   const observer = new IntersectionObserver(callback, options);
  //   observer.observe(ref.current); //Start observation

  //   return () => {
  //     observer.disconnect(); //Stop observation
  //   };
  // }, []);


  // return (
  //   <section>
  //     <div className={styles.flex}>
  //       <div className={styles.title}>
  //         <h2>Follow Us On Instagram</h2>
  //         <h2 className={styles.gradient}>#YOGA</h2>
  //       </div>
  //       <div className={styles.button}>
  //         <p>Follow</p><p>&#10132;</p>
  //       </div>

  //       <div className={styles.image_part}>
  //           <div className={styles.image_top_div}>
  //           <Image src={yoga1} alt={"yoga1"} className={scrollPosition >100 ? styles.scroll_yoga1 : ""}></Image>
            
  //           <Image src={yoga2} alt={"yoga2"} className={scrollPosition >100 ?styles.scroll_yoga2: ""}></Image>
  //         </div>
  //         <Image src={yoga3} alt={"yoga3"} className={scrollPosition  >100?styles.scroll_yoga3: ""}></Image>
  //         <Image src={yoga4} alt={"yoga4"} className={scrollPosition >100 ?styles.scroll_yoga4: ""}></Image>
  //       </div>

  //     </div>
  //   </section>
  // );


  return (
    <section>
      <div className={styles.flex}>
        <div className={styles.title}>
          <h2>Follow Us On Instagram</h2>
          <h2 className={styles.gradient}>#YOGA</h2>
        </div>
        <div className={styles.button}>
          <p>Follow</p><p>&#10132;</p>
        </div>

        <div className={styles.image_part}>
          <div className={styles.image_top_div}>
            <Image src={yoga1} alt={"yoga1"} className={styles.scroll_yoga1}></Image>
            <Image src={yoga2} alt={"yoga2"} className={styles.scroll_yoga2}></Image>
          </div>
          <Image src={yoga3} alt={"yoga3"} className={styles.scroll_yoga3}></Image>
          <Image src={yoga4} alt={"yoga4"} className={styles.scroll_yoga4}></Image>
        </div>

      </div>
    </section>
  );
}
