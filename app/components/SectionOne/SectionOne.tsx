import Image from "next/image";
import style from "./sectionOne.module.css";
import list_yoga from "./list-yoga.png"
import { useIsScreenWide } from "../../utils/isScreenWideHook";
import button from "./button.svg";
export function SectionOne() {
  const isScreenWide = useIsScreenWide();

  return (
    <section className={style.section}>
      {/* #01 */}
      <div className={style.container}>

        <div className={style.number}>
          #01
        </div>

        <div className={style.image}>
          <Image src={list_yoga}
            width={isScreenWide ? 380 : 180}
            alt="Mina do yoga" />
        </div>
      </div>

      <div className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, provident? Est quis necessitatibus molestias unde omnis aliquid eum nulla nemo voluptate repellat? Nihil ut facilis corrupti nisi nemo deserunt ipsa.
      </div>

      <div className={style.button}>
        <button className={style.button}>  <Image src={button} alt="next button" /></button>
      
      </div>
    </section>
  );
}


