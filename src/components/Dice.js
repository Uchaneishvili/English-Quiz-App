import React from "react";
import "./Dice.css";
import cubeImg1 from "./Img/dice-six-faces-1.png";
import cubeImg2 from "./Img/dice-six-faces-2.png";
import cubeImg3 from "./Img/dice-six-faces-3.png";
import cubeImg4 from "./Img/dice-six-faces-4.png";
import cubeImg5 from "./Img/dice-six-faces-5.png";
import cubeImg6 from "./Img/dice-six-faces-6.png";

const Dice = () => {
    const rollHandler = () => {
      let randNum = Math.floor(Math.random() * 6 + 1);
      let showClass = "show" + randNum;
      let cube = document.getElementsById("cube");
      let currentClass = cube.classList;
      if (currentClass) {
        cube.classList.remove(currentClass);
      }
      cube.classList.add(showClass);
      currentClass = showClass;
    };

  return (
    <div className="scene">
      <div className="cube" id="cube">
        <div className={`cube__face cube__face1`}>
          <img src={cubeImg1} alt=""></img>
        </div>
        <div className={`cube__face cube__face2`}>
          <img src={cubeImg2} alt=""></img>
        </div>
        <div className={`cube__face cube__face3`}>
          <img src={cubeImg3} alt=""></img>
        </div>
        <div className={`cube__face cube__face4`}>
          <img src={cubeImg4} alt=""></img>
        </div>
        <div className={`cube__face cube__face5`}>
          <img src={cubeImg5} alt=""></img>
        </div>
        <div className={`cube__face cube__face6`}>
          <img src={cubeImg6} alt=""></img>
        </div>
      </div>

      <button onClick={rollHandler} className="btnRoll">
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;
