import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Image src={"/hero.jpg"} alt="hero" fill/> */}
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
