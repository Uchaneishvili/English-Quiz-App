/** @format */

import React, { useState, useEffect } from 'react';
import { TrophyFilled, PlayCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import Quiz from '../components/Quiz';
import Dice from '../components/Dice';
import styles from './MainPage.module.css';
import InitialModal from '../components/InitialModal';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePlayer } from '../util/reduxStore';
import { resetNumbers } from '../util/reduxStore';

function MainPage() {
	const dispatch = useDispatch();
	const [isEnabled, setIsEnabled] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const numbers = useSelector((state) => state.numbers);
	const activePlayer = useSelector((state) => state.activePlayer);
	const [oneScore, setOneScore] = useState(0);
	const [twoScore, setTwoScore] = useState(0);
	const [isWinner, setIsWinner] = useState();
	const [startG, setStartG] = useState(false);

	const showQuizzHandler = (show) => {
		if (numbers.length === 1) {
			setIsEnabled(show);
		}
	};

	useEffect(() => {
		if (isEnabled === false) {
			dispatch(resetNumbers());
		}
	}, [isEnabled]);

	useEffect(() => {
		if (numbers.length > 1) {
			if (numbers[numbers.length - 1] < numbers[numbers.length - 2]) {
				dispatch(setActivePlayer(1));
			} else if (numbers[numbers.length - 1] > numbers[numbers.length - 2]) {
				dispatch(setActivePlayer(2));
			}
		}
	}, [numbers.length, numbers, dispatch]);
	console.log('1', isWinner);
	const gameStartHandler = () => {
		setStartG(true);
	};
	return (
		<>
			<div className={styles.container}>
				<div
					className={
						activePlayer === 1 ? styles.activePlayerSide : styles.playerSide
					}>
					<div className={styles.playerName}>
						<div className={styles.hide}>
							<TrophyFilled />
						</div>
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
				<span style={{ visibility: 'hidden' }}></span>
				<div className={styles.middle}>
					<div style={!startG ? { display: 'none' } : { display: 'flex' }}>
						<Dice onShowQuizz={showQuizzHandler} />
					</div>
					<div className={startG ? styles.hide : styles.btnContainer}>
						<Button
							onClick={gameStartHandler}
							className={styles.btnRoll}>
							<PlayCircleFilled />
							Play
						</Button>
					</div>

					{isEnabled && (
						<Quiz
							isWinner={isWinner}
							setIsWinner={setIsWinner}
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
						<div className={styles.throphy}>
							<TrophyFilled />
						</div>
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
