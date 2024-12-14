import { useEffect, useState, useRef } from "react";

export const useLazyLoad = <T extends HTMLElement>() => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [visible, ref] as const;
};
