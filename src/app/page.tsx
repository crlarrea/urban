import Image from "next/image";
import styles from "./page.module.scss";
import { FaSpotify } from "react-icons/fa6";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>hypnotic</h1>
      <h2>bashful</h2>
      <h3><FaSpotify/> now playing</h3>
      <article className={styles.hero}>
        <span>eins</span>
        <Image src={"/person.png"} alt="hero" fill />
      </article>

      <article className={styles.neon}>
        <span>zwei</span>
        <Image src={"/person.png"} alt="hero" fill />
      </article>
      <article className={styles.shadows}>
        <span>drei</span>
        <div></div>
      </article>

    </main>
  );
}
