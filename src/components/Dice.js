import React from "react";
import styles from "./Dice.module.css";
const Dice = () => {
  const rollHandler = () => {
    let randNum = Math.floor(Math.random() * 6 + 1);
    let showClass = "show" + randNum;
    if (currentClass) {
      cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
  };

  return (
    <div className={styles.scene}>
      <div className={styles.cube}>
        <div className={styles.cube__face + styles.cube__face1}></div>
        <div className={styles.cube__face + styles.cube__face2}></div>
        <div className={styles.cube__face + styles.cube__face3}></div>
        <div className={styles.cube__face + styles.cube__face4}></div>
        <div className={styles.cube__face + styles.cube__face5}></div>
        <div className={styles.cube__face + styles.cube__face6}></div>
      </div>
      <button onClick={rollHandler} className={styles.btnRoll}>
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;
