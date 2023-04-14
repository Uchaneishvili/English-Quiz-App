/** @format */

import React, { useState } from "react";
import Quiz from "../components/Quiz";
import Dice from "../components/Dice";

function MainPage() {
  const [isEnabled, setIsEnabled] = useState(false);

  const showQuizzHandler = (show) => {
    setIsEnabled(show);
  };

 
  return (
    <div>
      <Dice onShowQuizz={showQuizzHandler} />
      {isEnabled && <Quiz enabled={isEnabled} setEnabled={setIsEnabled} />}
    </div>
  );
}

export default MainPage;
