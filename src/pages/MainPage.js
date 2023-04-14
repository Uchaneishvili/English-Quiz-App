/** @format */

import React, { useState } from 'react';
import Quiz from '../components/Quiz';
import Dice from '../components/Dice';
import styles from './MainPage.module.css';
import InitialModal from '../components/InitialModal';

function MainPage() {
	const [isEnabled, setIsEnabled] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [playerOne, setPlayerOne] = useState('Player 1');
	const [playerTwo, setPlayerTwo] = useState('Player 2');

	const showQuizzHandler = (show) => {
		setIsEnabled(show);
	};

	return (
		<>
			<div className={styles.container}>
				<div>
					<h2> {playerOne}</h2>
				</div>
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
				<div>
					<h2> {playerTwo}</h2>
				</div>
			</div>
			<InitialModal />
		</>
	);
}

export default MainPage;
