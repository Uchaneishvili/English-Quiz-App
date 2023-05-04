/** @format */

import React, { useState } from "react";
import { Modal } from "antd";
import backgroundAudio from "../Audio/backgroundMusic.mp3";
import clickAudio from "../Audio/click.mp3";

function InitialModal() {
  const [visible, setVisible] = useState(true);
  const play = () => {
    const audio = new Audio(backgroundAudio);
    audio.loop = true;
    audio.play();
  };
  const clickAudioHandler = () => {
    new Audio(clickAudio).play();
  };
  const modalHandler = () => {
    setVisible(false);
    play();
    clickAudioHandler();
  };
  return (
    <Modal
      open={visible}
      title={<h2>Dice Game Rules</h2>}
      onCancel={modalHandler}
      footer={null}
    >
      <h2>Objective:</h2>
      <p>
        The objective of the game is to score the most points by answering
        questions from The Quizz.
      </p>
      <h2>Gameplay:</h2>
      <ol>
        <li>Each player takes turns rolling dice. </li>
        <li>
          After each roll, the player with the bigger number starts answering
          the first three questions of The Quizz.
        </li>
        <li>
          After the player has finished submitting their answers, they score
          points based on the options they have selected.
        </li>
      </ol>

      <h2>End of Game:</h2>
      <p>
        The player with the highest total score at the end of the game is
        declared the winner.
      </p>
    </Modal>
  );
}

export default InitialModal;
