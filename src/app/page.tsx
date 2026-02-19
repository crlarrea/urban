"use client";
import styles from "./page.module.scss";
import Item from "./item";
import { useState } from "react";
import { FaSpotify, FaYoutube, FaSoundcloud } from "react-icons/fa6";

type StyleState = {
  backgroundColour: string;
};

type DataItem = {
  description: string;
  backgroundColour: string;
};

export default function Home() {
  const data: DataItem[] = [
    { description: "Strobe", backgroundColour: "cyan" },
    { description: "Synthwave", backgroundColour: "blue" },
    { description: "Cyberpunk", backgroundColour: "#FF2DD1" },
    { description: "Loop", backgroundColour: "#4DFFBE" },
    { description: "Resonance", backgroundColour: "#F93827" },
    { description: "Pulse", backgroundColour: "#5B23FF" },
    { description: "Minimal", backgroundColour: "#E4FF30" },
  ];

  const [styleState, setStyleState] = useState<StyleState>({
    backgroundColour: "transparent",
  });

  const updateStyle = (state: StyleState): void => {
    setStyleState(state);
  };

  return (
    <main className={styles.main}>
      <section
        className={styles.page}
        style={{
          backgroundImage: `radial-gradient(
            ellipse at 50% -50%,
            hsl(from ${styleState.backgroundColour} h s calc(l + 50)),
            ${styleState.backgroundColour},
            black
          )`,
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

        <ul className={styles.platforms}>
          <li>
            <FaSpotify />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaSoundcloud />
          </li>
        </ul>

        <h1 className={styles.header}>pixie</h1>

        <video autoPlay loop muted className={styles.hero}>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </main>
  );
}
