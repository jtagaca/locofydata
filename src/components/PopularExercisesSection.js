import CardCol from "../components/CardCol";
import styles from "./PopularExercisesSection.module.css";

const PopularExercisesSection = () => {
  return (
    <div className={styles.popularExercisesSectionDiv}>
      <div className={styles.popularExercisesDiv}>
        <div className={styles.titleDiv}>
          <div className={styles.popularExercisesDiv1}>Popular Exercises</div>
          <div className={styles.sEEMOREEXERCISES}>SEE MORE EXERCISES</div>
        </div>
        <div className={styles.exerciseCardsDiv}>
          <CardCol
            rectangle10="rectangle-10.svg"
            rectangle101="rectangle-10.svg"
          />
          <CardCol
            rectangle10="rectangle-102.svg"
            rectangle101="rectangle-102.svg"
          />
          <CardCol
            rectangle10="rectangle-104.svg"
            rectangle101="rectangle-104.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularExercisesSection;
