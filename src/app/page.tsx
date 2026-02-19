"use client";
import styles from "./page.module.scss";
import Item from "./item";
import { useState } from "react";
export default function Home() {
  const data = [
    {
      description: "Strobe",
      backgroundColour: "cyan",
    },
    {
      description: "Synthwave",
      backgroundColour: "blue",
    },
    {
      description: "Cyberpunk",
      backgroundColour: "#FF2DD1",
    },
    {
      description: "Loop",
      backgroundColour: "#4DFFBE",
    },
    {
      description: "Resonance",
      backgroundColour: "#F93827",
    },
    {
      description: "Pulse",
      backgroundColour: "#5B23FF",
    },
    {
      description: "Minimal",
      backgroundColour: "#E4FF30",
    },
  ];
  const [styleState, setStyleState] = useState({
    backgroundColour: "transparent",
  });
  const updateStyle = (state) => {
    setStyleState(state);
  };
  return (
    <main className={styles.main}>
      <section
        className={styles.page}
        style={{
          backgroundImage: `url("/person.png"), radial-gradient(circle at 50% 20%, ${styleState.backgroundColour}, black 70%)`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {data.map((entry) => {
          const { description, backgroundColour } = entry;
          return (
            <Item
              key={description}
              description={description}
              backgroundColour={backgroundColour}
              updateStyle={updateStyle}
            />
          );
        })}
      </section>
    </main>
  );
}
