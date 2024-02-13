import Image from "next/image";
import style from "./sectionOne.module.css";
import list_yoga from "./list-yoga.png";
import stars from "./liststar-2-img.svg";
import { useIsScreenWide } from "../../utils/isScreenWideHook";
import button from "./button.svg";
export function SectionOne() {
  const isScreenWide = useIsScreenWide();

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.number}>#01</div>
        <div className={style.image}>
          <Image
            src={list_yoga}
            width={isScreenWide ? 380 : 180}
            alt="Mina do yoga"
          />
        </div>
      </div>

      <div className={style.text}>
        <div className={style.stars}>
          <Image src={stars} alt="stars" />
        </div>
        Get a list of specific influencers in your niche at your fingertips so
        you can focus on managing your status.
      </div>

      <div className={style.button}>
        <button className={style.button}>
          <Image src={button} alt="next button" />
        </button>
      </div>
    </section>
  );
}
