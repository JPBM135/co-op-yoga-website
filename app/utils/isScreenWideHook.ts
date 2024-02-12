import { useEffect, useState } from "react";

export function useIsScreenWide() {
  const [isScreenWide, setIsScreenWide] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsScreenWide(true);
    } else {
      setIsScreenWide(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return isScreenWide;
}
