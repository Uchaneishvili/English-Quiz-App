/** @format */

import React from 'react';
import { Modal, Button } from 'antd';
import styles from './Quiz.module.css';

function Quiz(props) {
	const handleAnswerSelect = (answer) => {
		props.setSelectedAnswer(answer);
	};

	const handleSubmitAnswer = () => {
		props.handleNextQuestion();
		props.setEnabled(false);
	};

	return (
		<Modal
			open={props.enabled}
			closable={false}
			title={<h2>{!props.showResult && props.currentQuestion.question}</h2>}
			footer={
				<>
					{props.currentQuestionIndex < props.questions.length - 1 ? (
						<>
							<Button
								type='primary'
								disabled={!props.selectedAnswer}
								onClick={handleSubmitAnswer}>
								Submit Answer
							</Button>
						</>
					) : (
						<div>
							{!props.showResult && (
								<Button
									type='primary'
									disabled={!props.selectedAnswer}
									onClick={props.handleShowResult}>
									Show Result
								</Button>
							)}
						</div>
					)}

					{props.showResult && (
						<Button
							type='primary'
							onClick={() => props.handleRestart()}>
							Restart Quiz
						</Button>
					)}
				</>
			}>
			{props.showResult ? (
				<div>
					<h2>
						Your score: {props.score}/{props.questions.length}
					</h2>
				</div>
			) : (
				<div>
					<div className={styles.container}>
						{props.currentQuestion.options.map((option) => (
							<Button
								className={styles.button}
								key={option}
								type={props.selectedAnswer === option ? 'primary' : 'default'}
								onClick={() => handleAnswerSelect(option)}>
								{option}
							</Button>
						))}
					</div>
				</div>
			)}
		</Modal>
	);
}

export default Quiz;
