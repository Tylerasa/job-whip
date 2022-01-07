import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
        recusandae fugiat esse consequatur at porro magni soluta accusamus,
        autem et? Praesentium, cumque harum sit dolore nesciunt unde vitae
        corrupti?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
        recusandae fugiat esse consequatur at porro magni soluta accusamus,
        autem et? Praesentium, cumque harum sit dolore nesciunt unde vitae
        corrupti?
      </p>
      <Link href="/countries">
        <a className={styles.btn}>See Country Listing</a>
      </Link>
    </div>
  );
}
