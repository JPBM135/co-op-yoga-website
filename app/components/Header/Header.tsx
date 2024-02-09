"use client";

import { useEffect, useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [colorScheme, setColorScheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    console.log("mounted");
    document.documentElement.setAttribute("data-theme", colorScheme);
  }, [colorScheme]);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Welcome to Next.js!</h1>
      <button onClick={toggleColorScheme}>Toggle color scheme</button>
    </header>
  );
}
