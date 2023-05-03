/** @format */

import React from "react";
import { useRef } from "react";
import "./Dice.css";
import cubeImg1 from "./Img/dice-six-faces-1.png";
import cubeImg2 from "./Img/dice-six-faces-2.png";
import cubeImg3 from "./Img/dice-six-faces-3.png";
import cubeImg4 from "./Img/dice-six-faces-4.png";
import cubeImg5 from "./Img/dice-six-faces-5.png";
import cubeImg6 from "./Img/dice-six-faces-6.png";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { addNumber } from '../util/reduxStore';

import sound from "../Audio/rollingDice.mp3";

const Dice = (props) => {
  const play = () => {
    new Audio(sound).play();
  };

  const numbers = useSelector((state) => state.numbers);
  const dispatch = useDispatch();
  const ref = useRef();

  const gnrt = () => {
    let num;
    do {
      num = Math.floor(Math.random() * 6 + 1);
    } while (num === numbers[numbers.length - 1]);
    return num;
  };
  const rollHandler = () => {
    play();
    //audio
    var rndm = gnrt();

    dispatch(addNumber(rndm));

    let showClass = "show" + rndm;
    var currentClass = ref.current.classList;
    if (currentClass !== "cube") {
      ref.current.classList = "cube";
    }
    ref.current.classList.add(showClass);

    setTimeout(() => {
      props.onShowQuizz(true);
    }, 1000);
  };

  return (
    <div className="scene">
      <div className="cube" ref={ref}>
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

      <Button onClick={rollHandler} className="btn-roll">
        Roll Dice
      </Button>
    </div>
  );
};

export default Dice;
