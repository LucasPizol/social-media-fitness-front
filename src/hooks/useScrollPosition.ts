import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY + window.innerHeight);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition(); // Atualizar a posição inicial
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
