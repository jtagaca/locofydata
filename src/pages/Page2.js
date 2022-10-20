import Navbar from "../components/Navbar";
import PopularExercisesSection from "../components/PopularExercisesSection";
import styles from "./Page2.module.css";

const Page2 = () => {
  return (
    <div className={styles.page2Div}>
      <Navbar />
      <div className={styles.frameDiv}>
        <b className={styles.page2B}>Page 2</b>
        <PopularExercisesSection />
      </div>
    </div>
  );
};

export default Page2;
