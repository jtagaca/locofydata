import { useCallback } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const onLogoButtonClick = useCallback(() => {
    // Please sync "FitnessLandingPage" to the project
  }, []);

  const onExercisesButtonClick = useCallback(() => {
    // Please sync "FitnessLandingPage" to the project
  }, []);

  const onTrainersButtonClick = useCallback(() => {
    // Please sync "FitnessLandingPage" to the project
  }, []);

  const onPricingButtonClick = useCallback(() => {
    // Please sync "FitnessLandingPage" to the project
  }, []);

  const onLoginButtonClick = useCallback(() => {
    // Please sync "FitnessLandingPage" to the project
  }, []);

  return (
    <div className={styles.navbarDiv}>
      <div className={styles.navDiv}>
        <button className={styles.logoButton} onClick={onLogoButtonClick}>
          WORKOUT
        </button>
        <div className={styles.menuRightDiv}>
          <div className={styles.menuLinksDiv}>
            <button
              className={styles.exercisesButton}
              onClick={onExercisesButtonClick}
            >
              EXERCISES
            </button>
            <button
              className={styles.exercisesButton}
              onClick={onTrainersButtonClick}
            >
              TRAINERS
            </button>
            <button
              className={styles.exercisesButton}
              onClick={onPricingButtonClick}
            >
              PRICING
            </button>
            <button className={styles.loginButton} onClick={onLoginButtonClick}>
              LOGIN
            </button>
          </div>
          <button className={styles.hamburgerIconButton}>
            <img className={styles.group2Icon} alt="" src="../group2.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
