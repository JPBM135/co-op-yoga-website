import Image from "next/image";
import style from "./sectionTwo.module.css";
import health_fitness from "./health_fitness.png";
import { ArrowRight } from "@phosphor-icons/react";
export function SectionTwo() {
  return (
    <section className={style.section}>

      <div className={style.image}>
        <Image src={health_fitness} alt="health and fitness" />
      </div>

      <div className={style.container}>
        <h1 className={style.title}>
        Bring Happines to Good Health
        </h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, provident? Est quis necessitatibus molestias unde omnis aliquid eum nulla nemo voluptate repellat? Nihil ut facilis corrupti nisi nemo deserunt ipsa.
        </p>
          <button className={style.button}>
           Lets Start<ArrowRight size={24} />
          </button>
      </div>
    </section>
  );
}
