/** @format */

import React from "react";
import { Modal } from "antd";

function InitialModal() {
  return (
    <Modal open={true} title={<h2>Dice Game Rules</h2>} footer={null}>
      <h2>Objective:</h2>
      <p>
	  The objective of the game is to score the most points by answering questions from The Quizz.
      </p>
      <h2>Gameplay:</h2>
      <ol>
        <li>Each player takes turns rolling dice. </li>
        <li>
		After each roll, the player with the bigger number starts answering the first three questions of The Quizz.
        </li>
        <li>
		After the player has finished submitting their answers, they score points based on the options they have selected.
        </li>
      </ol>

      <h2>End of Game:</h2>
      <p>
	  The player with the highest total score at the end of the game is declared the winner.
      </p>
	  
    </Modal>
  );
}

export default InitialModal;
