import ExerciseCard from "../components/ExerciseCard";
import styles from "./CardCol.module.css";

const CardCol = ({
  rectangle10,
  rectangle101,
  image1,
  image2,
  title1,
  title2,
}) => {
  return (
    <div className={styles.column1Div}>
      <ExerciseCard
        cardImage={image1}
        // title={title1}
        rectangle10={rectangle10}
      />
      <ExerciseCard
        cardImage={image2}
        // title={title2}
        rectangle101={rectangle101}
      />
    </div>
  );
};

export default CardCol;
