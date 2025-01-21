import styles from "./page.module.css";
import HomeLayout from "../features/pages/home/layout/HomeLayout";

export default function Home() {
  console.log("home is");
  return (
    <div className={styles.page}>
      <HomeLayout />
    </div>
  );
}
