import styles from "./ExerciseCard.module.css";

const ExerciseCard = ({ cardImage, title, rectangle10, rectangle101 }) => {
  return (
    <div className={styles.exerciseCardDiv}>
      <img className={styles.cardImageIcon} alt="" src={cardImage} />
      <div className={styles.textDiv}>
        <div className={styles.titlesDiv}>
          <div className={styles.titleDiv}>{title}</div>
          <div className={styles.subtitleDiv}>{`250 est calories `}</div>
        </div>
        <div className={styles.durationDiv}>
          <img className={styles.rectangleIcon} alt="" src={rectangle10} />
          <div className={styles.div}>58:24</div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
