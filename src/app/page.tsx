import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>beat</h1>
      {/* <Image src={"/hero.jpg"} alt="hero" fill/> */}
      <article className={styles.hero}>
        <Image src={"/person.png"} alt="hero" fill/>
      </article>

      <article className={styles.neon}>
        <Image src={"/person.png"} alt="hero" fill/>
      </article>
      <article className={styles.shadows}>
        <Image src={"/person.png"} alt="hero" fill/>
        {/* <Image src={"/person.png"} alt="hero" fill/> */}
      </article>
    </main>
  );
}
