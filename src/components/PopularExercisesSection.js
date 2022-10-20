import CardCol from "../components/CardCol";
import styles from "./PopularExercisesSection.module.css";
import { useState, useEffect } from "react";

import Axios from "axios";
const PopularExercisesSection = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    // // axios get request
    Axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        // debugger;
        console.log(response.data);
        setCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.popularExercisesSectionDiv}>
      <div className={styles.popularExercisesDiv}>
        <div className={styles.titleDiv}>
          <div className={styles.popularExercisesDiv1}>Popular Exercises</div>
          <div className={styles.sEEMOREEXERCISES}>SEE MORE EXERCISES</div>
        </div>
        <div className={styles.exerciseCardsDiv}>
          {/* loop through cards with a step of 2 */}
          {/* only loop through 6 elements  */}
          {cards.slice(0, 6).map((card, index) => {
            if (index % 2 === 0) {
              return (
                <CardCol
                  rectangle10={card.url}
                  rectangle101={cards[index + 1].url}
                  image1={card.thumbnailUrl}
                  image2={cards[index + 1].url}
                  title1={card.title}
                  title2={cards[index + 1].title}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularExercisesSection;
