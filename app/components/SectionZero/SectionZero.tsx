import Image from "next/image";
import style from "./sectionZero.module.css";
import home_star from "./home-star.svg";
import home_yoga from "./home-yoga.png";
import { ArrowRight } from "@phosphor-icons/react";

export function SectionZero({ isScreenWide }: { isScreenWide: boolean }) {
  return (
    <section className={style.section}>
      <div className={style.section__container}>
        <h1 className={`${style.section__title} utils__font-lora`}>
          Choose Your
          {isScreenWide ? <br /> : " "}
          Best{" "}
          <div className={`${style.section__title__yoga} utils__font-lora`}>
            Yoga
          </div>
          {isScreenWide ? " " : <br />}
          <Image
            className={style.section__title__icon}
            src={home_star}
            alt="Logo"
          />
          Teacher
        </h1>
        <p className={style.section__subtitle}>
          Calm your mind and body with the best yoga teachers available, relax
          your day and stay positive.
        </p>
        <button className={style.section__btn}>
          Get Started Free <ArrowRight size={24} />
        </button>

        <div className={style.section__stats}>
          <div className={style.section__stats__item}>
            <h2 className={`${style.section__stats__number} utils__font-lora`}>
              300+
            </h2>
            <p className={style.section__stats__text}>Participants</p>
          </div>

          <div className={style.section__stats__item}>
            <h2 className={`${style.section__stats__number} utils__font-lora`}>
              40+
            </h2>
            <p className={style.section__stats__text}>Yoga Classes</p>
          </div>
        </div>
      </div>

      <Image
        sizes="(min-width: 768px) 50vw, 300px"
        src={home_yoga}
        alt="Logo"
        priority={true}
        width={isScreenWide ? 700 : 300}
        className={style.section__img}
      />
    </section>
  );
}
