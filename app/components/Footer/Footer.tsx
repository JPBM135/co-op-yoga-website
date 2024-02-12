"use client";

import style from "./footer.module.css";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import youtube from "./youtube.svg";
import Image from "next/image";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__container__about}>
          <h2 className={`${style.footer__header} utils__font-lora`}>Yoga</h2>
          <p className={style.footer__text}>
            Take care of your health and your mind with the best Yoga classes.
          </p>
        </div>
        <section className={style.footer__section}>
          <h3 className={`utils__font-lora ${style.footer__section__title}`}>
            Address
          </h3>
          <p>
            12345 M/01
            <br />
            Sol Avenue, Lima, Peru
          </p>
        </section>
        <section className={style.footer__section}>
          <h3 className={`utils__font-lora ${style.footer__section__title}`}>
            Contact
          </h3>
          <p>
            +123 456 7890
            <br />
            yoga@email.com
          </p>
        </section>
        <section className={style.footer__section}>
          <h3 className={`utils__font-lora ${style.footer__section__title}`}>
            Office
          </h3>
          <p>
            Monday - Friday
            <br />
            9AM - 10PM
          </p>
        </section>
      </div>
      <div className={style.footer__divider}></div>
      <div className={style.footer__container}>
        <section className={style.footer__socials}>
          <Image
            src={facebook}
            alt="Logo"
            className={style.footer__socials__logo}
          />
          <Image
            src={instagram}
            alt="Logo"
            className={style.footer__socials__logo}
          />
          <Image
            src={twitter}
            alt="Logo"
            className={style.footer__socials__logo}
          />
          <Image
            src={youtube}
            alt="Logo"
            className={style.footer__socials__logo}
          />
        </section>
        <section className={style.footer__copy}>
          <p>&copy; Copyright Bedimcode. All rights reserved</p>
        </section>
      </div>
    </footer>
  );
}
