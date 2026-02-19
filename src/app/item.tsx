"use client";
import styles from "@/app/page.module.scss";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";

export default function Item({ description, backgroundColour, updateStyle }) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 1,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    updateStyle({ backgroundColour: backgroundColour });
  }, [entry?.isIntersecting]);

  return (
    <article className={styles.item} ref={ref}>
      <p
        style={{ color: backgroundColour }}
        className={entry?.isIntersecting ? styles.flicker : ""}
      >
        {description}
      </p>
    </article>
  );
}
