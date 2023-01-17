import { useEffect, useState } from "react";

function useScroll() {
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const [scrollX, setScrollX] = useState<number>(window.scrollX);

  useEffect(() => {
    window.onscroll = () => {
      setScrollY(window.scrollY);
      setScrollX(window.scrollX);
    };
  }, []);

  return {
    scrollX,
    scrollY,
    scrollBy: window.scrollBy,
    scrollTo: window.scrollTo,
  };
}

export default useScroll;
