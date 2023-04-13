/** @format */

import React, { useState } from "react";
import Quiz from "../components/Quiz";
import Dice from "../components/Dice";
import { Button } from "antd";

function MainPage() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div>
      <Dice />
      <Button onClick={() => setIsEnabled(true)}>Press Me!</Button>

      {isEnabled && <Quiz />}
    </div>
  );
}

export default MainPage;
