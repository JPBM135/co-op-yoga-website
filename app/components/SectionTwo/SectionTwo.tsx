import Image from "next/image";
import style from "./sectionTwo.module.css";
import health_fitness from "./health_fitness.png";
import { ArrowRight, Heart } from "@phosphor-icons/react";
import { useIsScreenWide } from "../../utils/isScreenWideHook";

export function SectionTwo() {
  const isScreenWide = useIsScreenWide();

  return (
    <section className={style.section}>
      <div className={style.image}>
        <div className={style.image__heart}>
          <Heart className={style.image__heart__icon} size={32} weight="fill" />
          <div>
            <h3 className={style.image__heart__title}>Heart Rate</h3>
            <p className={style.image__heart__text}>168 bpm</p>
          </div>
        </div>
        <div className={style.image__free}>
          <h3 className={style.image__free__title}>+500</h3>
          <p className={style.image__free__text}>Free courses</p>
        </div>
        <Image
          src={health_fitness}
          alt="health and fitness"
          width={isScreenWide ? 500 : 320}
        />
      </div>

      <div className={style.container}>
        <h1 className={style.title}>Bring Happiness To Good Health!</h1>
        <p className={style.text}>
          If you take care of your good health, take care of your mentality and
          lead a healthy life with positive thoughts every day.
        </p>
        <button className={style.button}>
          Lets start <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
}
