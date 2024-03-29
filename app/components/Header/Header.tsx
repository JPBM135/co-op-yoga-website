"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./header.module.css";
import { Moon, Sun, CirclesFour, X } from "@phosphor-icons/react";
import { useIsScreenWide } from "../../utils/isScreenWideHook";
import { safeWindow } from "../../utils/safeWindow";

const PREFERRED_COLOR_SCHEME_KEY = "preferredColorScheme";

const setTheme = (
  theme: "dark" | "light",
  _window: Window & typeof globalThis
) => {
  document.documentElement.setAttribute("data-theme", theme);
  _window?.localStorage?.setItem(PREFERRED_COLOR_SCHEME_KEY, theme);
};

export default function Header() {
  const _window = safeWindow();

  const defaultTheme =
    (_window?.localStorage?.getItem(PREFERRED_COLOR_SCHEME_KEY) as
      | "dark"
      | "light") ??
    (_window?.matchMedia &&
      _window?.matchMedia("(prefers-color-scheme: dark)").matches &&
      "dark") ??
    "light";

  const isScreenWide = useIsScreenWide();
  const [colorScheme, setColorScheme] = useState<"dark" | "light">(
    defaultTheme
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleColorScheme = () => {
    setColorScheme(colorScheme && colorScheme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    }

    if (isMenuOpen && document?.getElementById("header_menu")) {
      document
        .getElementById("header_menu")
        ?.classList.toggle(styles["menu__animate"]);

      document
        .getElementById("header_menu")
        ?.classList.toggle(styles["menu__animate--reverse"]);

      setTimeout(() => {
        setIsMenuOpen(false);
      }, 300);
    }
  };

  useEffect(() => {
    if (!_window) return;
    setTheme(colorScheme, _window);
  }, [colorScheme]);

  useEffect(() => {
    if (!_window) return;
    setTheme(colorScheme, _window);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1 className={`${styles.header__title} utils__font-lora`}>Yoga</h1>
        <div className={styles.header__nav}>
          <button
            onClick={toggleColorScheme}
            aria-label="Toggle color scheme"
            className={styles["header__nav__link--unset"]}
          >
            {colorScheme === "light" ? (
              <Moon className={styles.header__nav__link} size={24} />
            ) : (
              <Sun className={styles.header__nav__link} size={24} />
            )}
          </button>
          {isScreenWide ? (
            <nav className={styles.header__nav__container}>
              <a
                href="#"
                className={`${styles.header__nav__link} ${styles.header__title} animations__growing-hover animations__growing-hover--left`}
              >
                Home
              </a>
              <a
                href="#"
                className={`${styles.header__nav__link} animations__growing-hover animations__growing-hover--left`}
              >
                Classes
              </a>
              <a
                href="#"
                className={`${styles.header__nav__link} animations__growing-hover animations__growing-hover--left`}
              >
                About
              </a>
              <a
                href="#"
                className={`${styles.header__nav__link} animations__growing-hover animations__growing-hover--left`}
              >
                Contact
              </a>
            </nav>
          ) : (
            <button
              className={styles["header__nav__link--unset"]}
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <CirclesFour className={styles.header__nav__link} size={24} />
            </button>
          )}
        </div>
      </header>
      {!isScreenWide && isMenuOpen && (
        <menu
          id="header_menu"
          className={`${styles.menu} ${styles.menu__animate}`}
        >
          <div className={styles.menu__header}>
            <X
              className={styles.menu__header__close}
              size={32}
              onClick={toggleMenu}
              role="button"
            />
          </div>
          <div className={styles.menu__body}>
            <nav className={styles.header__nav__container}>
              <a
                href="#"
                className={`${styles.header__nav__link} ${styles.header__title}`}
              >
                Home
              </a>
              <a href="#" className={styles.header__nav__link}>
                Classes
              </a>
              <a href="#" className={styles.header__nav__link}>
                About
              </a>
              <a href="#" className={styles.header__nav__link}>
                Contact
              </a>
            </nav>
          </div>
        </menu>
      )}
    </>
  );
}
