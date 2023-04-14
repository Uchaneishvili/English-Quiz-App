/** @format */

import React, { useState } from 'react';
import Quiz from '../components/Quiz';
import Dice from '../components/Dice';

function MainPage() {
	const [isEnabled, setIsEnabled] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	const showQuizzHandler = (show) => {
		setIsEnabled(show);
	};

	return (
		<div>
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
	);
}

export default MainPage;
