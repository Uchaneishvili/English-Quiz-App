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
	const [startG, setStartG] = useState(false);
	const [isWinner, setIsWinner] = useState(0);
	const [isFinished, setIsFinished] = useState();

	const showQuizzHandler = (show) => {
		if (numbers.length === 1) {
			setIsEnabled(show);
		}
	};

	useEffect(() => {
		if (isEnabled === false) {
			dispatch(resetNumbers());
		}
	}, [isEnabled, dispatch]);

	useEffect(() => {
		if (numbers.length > 1) {
			if (numbers[numbers.length - 1] < numbers[numbers.length - 2]) {
				dispatch(setActivePlayer(1));
			} else if (numbers[numbers.length - 1] > numbers[numbers.length - 2]) {
				dispatch(setActivePlayer(2));
			}
		}
	}, [numbers.length, numbers, dispatch]);
	const gameStartHandler = () => {
		setStartG(true);
	};

	useEffect(() => {
		if (isFinished) {
			if (oneScore > twoScore) {
				setIsWinner(1);
			} else if (oneScore < twoScore) {
				setIsWinner(2);
			} else {
				setIsWinner(3);
			}
		}
	}, [isFinished, oneScore, twoScore]);

	return (
		<>
			<div className={styles.container}>
				<div
					className={
						activePlayer === 1 ? styles.activePlayerSide : styles.playerSide
					}>
					<div className={styles.playerName}>
						<div
							className={
								isWinner === 1 && isWinner !== 0 && isWinner !== 2
									? styles.firstTrophy
									: styles.hide
							}>
							<TrophyFilled />
						</div>
						<h2> {'Player 1'} </h2>
						{activePlayer === 1 && (
							<p
								style={{
									display: 'flex',
									position: 'absolute',
									top: '36%',
									left: '31%',
								}}></p>
						)}
					</div>
					<div className={styles.score}>{oneScore}</div>
				</div>
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
							setIsFinished={setIsFinished}
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
						<div
							className={
								isWinner === 2 && isWinner !== 0 && isWinner !== 1
									? styles.secondTrophy
									: styles.hide
							}>
							<TrophyFilled />
						</div>
						{activePlayer === 2 && (
							<p
								style={{
									display: 'flex',
									position: 'absolute',
									top: '36%',
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
