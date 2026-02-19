"use client";
import styles from "@/app/page.module.scss";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";

type StyleState = {
  backgroundColour: string;
};

type ItemProps = {
  description: string;
  backgroundColour: string;
  updateStyle: (state: StyleState) => void;
};

export default function Item({
  description,
  backgroundColour,
  updateStyle,
}: ItemProps) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 1,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      updateStyle({ backgroundColour });
    }
  }, [entry?.isIntersecting, backgroundColour, updateStyle]);

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
