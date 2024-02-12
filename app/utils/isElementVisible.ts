import { useState } from "react";

export function useIsElementVisible(element: HTMLElement | null) {
  const [isVisible, setIsVisible] = useState(false);

  if (element) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
  }

  return isVisible;
}
