import { ArrowRight } from "@phosphor-icons/react";
import style from "./sectionFive.module.css";

export function SectionFive() {
  const clearInput = () => {
    const input = document.getElementById(
      "section_five_input"
    ) as HTMLInputElement | null;

    if (!input) {
      return;
    }

    input.value = "";
  };

  return (
    <section className={style.section}>
      <h2 className={` ${style.section__title} utils__font-lora`}>
        Join our newsletter
      </h2>
      <p className={style.section__text}>
        Subscribe to our newsletter to be aware of many things on discounts,
        gifts, training and much more. Just enter your email.
      </p>
      <div className={style.section__container}>
        <input
          id="section_five_input"
          className={style.section__input}
          type="email"
          placeholder="For latest update send mail"
        />
        <button className={style.section__btn} onClick={clearInput}>
          Subscribe <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
}
