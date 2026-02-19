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
          backgroundImage: `url("/person.png"), radial-gradient(ellipse at 50% -50%, hsl(from ${styleState.backgroundColour} h s calc(l + 50)),${styleState.backgroundColour}, black)`,
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
