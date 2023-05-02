/** @format */

import React, { useState, useEffect } from 'react';
import Quiz from '../components/Quiz';
import Dice from '../components/Dice';
import styles from './MainPage.module.css';
import InitialModal from '../components/InitialModal';

function MainPage() {
	const [isEnabled, setIsEnabled] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [turn, setTurn] = useState(1);
	const [oneScore, setOneScore] = useState(0);
	const [twoScore, setTwoScore] = useState(0);
	const showQuizzHandler = (show) => {
		setIsEnabled(show);
	};

	useEffect(() => {}, [currentQuestionIndex]);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.cntr}>
					<h1 className={styles.heading}>
						{'Giga'}
						<div
							className={
								turn === 1 ? styles.underlineActive : styles.underline
							}></div>
					</h1>

					<div className={styles.scoreContainer}>
						<h1>{oneScore}</h1>
					</div>
				</div>
				<div>
					<Dice onShowQuizz={showQuizzHandler} />
					{isEnabled && (
						<Quiz
							oneScore={oneScore}
							setOneScore={setOneScore}
							twoScore={twoScore}
							setTwoScore={setTwoScore}
							turn={turn}
							setTurn={setTurn}
							enabled={isEnabled}
							setEnabled={setIsEnabled}
							setCurrentQuestionIndex={setCurrentQuestionIndex}
							currentQuestionIndex={currentQuestionIndex}
						/>
					)}
				</div>
				<div className={styles.cntr}>
					<h1 className={styles.heading}>
						{'Bachuki'}
						<div
							className={
								turn === 2 ? styles.underlineActive : styles.underline
							}></div>
					</h1>

					<div className={styles.scoreContainer}>
						<h1>{twoScore}</h1>
					</div>
				</div>
			</div>
			<InitialModal />
		</>
	);
}

export default MainPage;
