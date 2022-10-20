import ExerciseCard from "../components/ExerciseCard";
import styles from "./CardCol.module.css";

const CardCol = ({ rectangle10, rectangle101 }) => {
  return (
    <div className={styles.column1Div}>
      <ExerciseCard
        cardImage="../cardimage@2x.png"
        title="Treadmill"
        rectangle10={rectangle10}
      />
      <ExerciseCard
        cardImage="../image@2x.png"
        title="Running"
        rectangle101={rectangle101}
      />
    </div>
  );
};

export default CardCol;
