/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import { Modal, Button, Row, Col } from 'antd';
import styles from './Quiz.module.css';
import { useSelector } from 'react-redux';

function Quiz(props) {
	const [showResult, setShowResult] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const activePlayer = useSelector((state) => state.activePlayer);

	const questions = [
		{
			question:
				'Which of the following is a type of sentence that gives a command or makes a request?',
			options: ['Interrogative', 'Exclamatory', 'Imperative', 'Declarative'],
			answer: 'Imperative',
		},
		{
			question:
				"What is the correct spelling of the word that means 'extremely beautiful'?",
			options: ['Gorgeous', 'Gorgous', 'Gorgeus', 'Gorgius'],
			answer: 'Gorgeous',
		},
		{
			question:
				"Which of the following is a type of figurative language that compares two unlike things using 'like' or 'as'?",
			options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
			answer: 'Simile',
		},
		{
			question:
				'What is the name for a word that has the same or nearly the same meaning as another word?',
			options: ['Antonym', 'Synonym', 'Homonym', 'Heteronym'],
			answer: 'Synonym',
		},
		{
			question: "What is the plural of the word 'goose'?",
			options: ['Geese', 'Gooses', 'Geeses', 'Gice'],
			answer: 'Geese',
		},
		{
			question:
				'Which of the following is a type of sentence that expresses strong emotion?',
			options: ['Interrogative', 'Exclamatory', 'Imperative', 'Declarative'],
			answer: 'Exclamatory',
		},
		{
			question:
				"What is the correct spelling of the word that means 'the act of making something less severe'?",
			options: ['Mitigation', 'Mitagation', 'Mittigation', 'Mittagation'],
			answer: 'Mitigation',
		},
		{
			question:
				'Which of the following is a type of figurative language that gives human qualities to non-human things?',
			options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
			answer: 'Personification',
		},
		{
			question:
				'What is the name for a word that is spelled the same as another word, but has a different meaning?',
			options: ['Antonym', 'Synonym', 'Homonym', 'Heteronym'],
			answer: 'Homonym',
		},
	];
	const currentQuestion = questions[props.currentQuestionIndex];

	const handleNextQuestion = () => {
		if (currentQuestion.answer === selectedAnswer) {
			if (activePlayer === 1) {
				props.setOneScore(props.oneScore + 1);
			} else {
				props.setTwoScore(props.twoScore + 1);
			}
		}

		props.setCurrentQuestionIndex(props.currentQuestionIndex + 1);

		if (questions.length - 1 === props.currentQuestionIndex) {
			setShowResult(false);
		}
	};

	const handleShowResult = () => {
		setShowResult(true);

		const currentQuestion = questions[props.currentQuestionIndex];
		if (currentQuestion.answer === selectedAnswer) {
			if (activePlayer === 1) {
				props.setOneScore(props.oneScore + 1);
			} else {
				props.setTwoScore(props.twoScore + 1);
			}
		}
	};

	const handleRestart = () => {
		props.setCurrentQuestionIndex(0);
		props.setOneScore(0);
		props.setTwoScore(0);
		setShowResult(false);
		setSelectedAnswer(false);
		props.setEnabled(false);
	};

	const handleAnswerSelect = (answer) => {
		setSelectedAnswer(answer);
	};

	const handleSubmitAnswer = () => {
		if (
			props.currentQuestionIndex !== 0 &&
			(props.currentQuestionIndex + 1) % 4 === 0
		) {
			props.setEnabled(false);
		}
		handleNextQuestion();
	};
	return (
		<>
			<Modal
				open={props.enabled}
				closable={false}
				title={<h2>{!showResult && currentQuestion.question}</h2>}
				footer={
					<>
						{props.currentQuestionIndex < questions.length - 1 ? (
							<>
								<Button
									type='primary'
									disabled={!selectedAnswer}
									onClick={handleSubmitAnswer}>
									Submit Answer
								</Button>
							</>
						) : (
							<div>
								{!showResult && (
									<Button
										type='primary'
										disabled={!selectedAnswer}
										onClick={handleShowResult}>
										Show Result
									</Button>
								)}
							</div>
						)}

						{showResult && (
							<Button
								type='primary'
								onClick={() => handleRestart()}>
								Restart Quiz
							</Button>
						)}
					</>
				}>
				{showResult ? (
					<div>
						<h2>
							<Row>
								<Col>
									Player 1 score: {props.oneScore}/{questions.length}
								</Col>
							</Row>

							<Row>
								<Col>
									Player 2 score: {props.twoScore}/{questions.length}
								</Col>
							</Row>
						</h2>
					</div>
				) : (
					<div>
						<div className={styles.container}>
							{currentQuestion.options.map((option) => (
								<Button
									className={styles.button}
									key={option}
									type={selectedAnswer === option ? 'primary' : 'default'}
									onClick={() => handleAnswerSelect(option)}>
									{option}
								</Button>
							))}
						</div>
					</div>
				)}
			</Modal>
		</>
	);
}

export default Quiz;
