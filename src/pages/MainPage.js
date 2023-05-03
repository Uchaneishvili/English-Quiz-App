/** @format */

import React, { useState } from "react";
import Quiz from "../components/Quiz";
import Dice from "../components/Dice";
import styles from "./MainPage.module.css";
import InitialModal from "../components/InitialModal";

function MainPage() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerOne, setPlayerOne] = useState("Player 1");
  const [playerTwo, setPlayerTwo] = useState("Player 2");
  const [activePlayer, setActivePlayer] = useState(1);
  const [oneScore, setOneScore] = useState(0);
  const [twoScore, setTwoScore] = useState(0);
  const showQuizzHandler = (show) => {
    setIsEnabled(show);
  };


  return (
    <>
      <div className={styles.container}>
        <div className={styles.playerSide}>
          <div className={styles.playerName}>
            <h2> {playerOne} </h2>
            {activePlayer === 1 && (
              <p
                style={{
                  display: "flex",
                  position: "absolute",
                  top: "41%",
                  left: "31%",
                }}
              ></p>
            )}
          </div>
          <div className={styles.score}>0</div>
        </div>
        <div className={styles.middle}>
          <Dice onShowQuizz={showQuizzHandler} />
          {isEnabled && (
            <Quiz
              enabled={isEnabled}
              setEnabled={setIsEnabled}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              currentQuestionIndex={currentQuestionIndex}
            />
          )}
        </div>
        <div className={styles.playerSide}>
          <div className={styles.playerName}>
            {activePlayer === 2 && (
              <p
                style={{
                  display: "flex",
                  position: "absolute",
                  top: "41%",
                  right: "17%",
                }}
              ></p>
            )}
            <h2> {playerTwo}</h2>
          </div>
          <div className={styles.score}>0</div>
        </div>
      </div>
      {/* <InitialModal /> */}
    </>
  );
}
export default MainPage;
