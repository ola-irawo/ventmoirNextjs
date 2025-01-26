import styles from "./page.module.css";
import HomeLayout from "../features/pages/home/layout/HomeLayout";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeLayout />
    </div>
  );
}
