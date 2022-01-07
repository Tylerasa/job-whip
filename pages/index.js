import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
export default function Home() {
  const value = useSelector((state) => state.floater.value);
  return (
    <div className={styles.container}>
      <h1 id="header" className={styles.title}>
        Homepage
      </h1>
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
        <a
          id="button"
          style={{
            backgroundColor: value ? "white" : "#111",
            color: value ? "#777" : "white",
          }}
          className={styles.btn}
        >
          See Country Listing
        </a>
      </Link>
    </div>
  );
}
