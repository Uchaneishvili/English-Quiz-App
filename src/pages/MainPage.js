/** @format */

import React, { useState, useEffect } from 'react';
import Quiz from '../components/Quiz';
import Dice from '../components/Dice';
import styles from './MainPage.module.css';
import InitialModal from '../components/InitialModal';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePlayer } from '../util/reduxStore';

function MainPage() {
	const dispatch = useDispatch();
	const [isEnabled, setIsEnabled] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const numbers = useSelector((state) => state.numbers);
	const activePlayer = useSelector((state) => state.activePlayer);

	const [oneScore, setOneScore] = useState(0);
	const [twoScore, setTwoScore] = useState(0);
	const showQuizzHandler = (show) => {
		setIsEnabled(show);
	};

	useEffect(() => {
		if (numbers.length > 1) {
			if (numbers[numbers.length - 1] < numbers[numbers.length - 2]) {
				dispatch(setActivePlayer(1));
			} else if (numbers[numbers.length - 1] > numbers[numbers.length - 2]) {
				dispatch(setActivePlayer(2));
			}
		}
	}, [numbers.length]);

	return (
		<>
			<div className={styles.container}>
				<div
					className={
						activePlayer === 1 ? styles.activePlayerSide : styles.playerSide
					}>
					<div className={styles.playerName}>
						<h2> {'Player 1'} </h2>
						{activePlayer === 1 && (
							<p
								style={{
									display: 'flex',
									position: 'absolute',
									top: '41%',
									left: '31%',
								}}></p>
						)}
					</div>
					<div className={styles.score}>{oneScore}</div>
				</div>
				<div className={styles.middle}>
					<Dice onShowQuizz={showQuizzHandler} />
					{isEnabled && (
						<Quiz
							setOneScore={setOneScore}
							oneScore={oneScore}
							setTwoScore={setTwoScore}
							twoScore={twoScore}
							enabled={isEnabled}
							setEnabled={setIsEnabled}
							setCurrentQuestionIndex={setCurrentQuestionIndex}
							currentQuestionIndex={currentQuestionIndex}
						/>
					)}
				</div>
				<div
					className={
						activePlayer === 2 ? styles.activePlayerSide : styles.playerSide
					}>
					<div className={styles.playerName}>
						{activePlayer === 2 && (
							<p
								style={{
									display: 'flex',
									position: 'absolute',
									top: '41%',
									right: '17%',
								}}></p>
						)}
						<h2> {'Player 2'} </h2>
					</div>
					<div className={styles.score}>{twoScore}</div>
				</div>
			</div>
			<InitialModal />
		</>
	);
}
export default MainPage;
