/** @format */

import React, { useState } from 'react';
import { Modal, Button } from 'antd';

function Quiz() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);
	const [isClosed, setIsClosed] = useState(false);

	const handleAnswerSelect = (answer) => {
		setSelectedAnswer(answer);
	};

	const handleNextQuestion = () => {
		const currentQuestion = questions[currentQuestionIndex];
		if (currentQuestion.answer === selectedAnswer) {
			setScore(score + 1);
		}
		setSelectedAnswer(null);
		setCurrentQuestionIndex(currentQuestionIndex + 1);
	};

	const handleShowResult = () => {
		const currentQuestion = questions[currentQuestionIndex];
		if (currentQuestion.answer === selectedAnswer) {
			setScore(score + 1);
		}
		setShowResult(true);
	};

	const handleRestart = () => {
		setCurrentQuestionIndex(0);
		setSelectedAnswer(null);
		setShowResult(false);
		setScore(0);
	};

	const questions = [
		{
			question: "What is the difference between 'affect' and 'effect'?",
			options: [
				'Affect is a verb, while effect is a noun.',
				'Affect is a noun, while effect is a verb.',
				'Affect and effect are synonyms.',
				'There is no difference.',
			],
			answer: 'Affect is a verb, while effect is a noun.',
		},
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

	const currentQuestion = questions[currentQuestionIndex];

	return (
		<Modal
			open={!isClosed}
			closable={false}
			footer={
				<>
					{currentQuestionIndex < questions.length - 1 ? (
						<Button
							type='primary'
							disabled={!selectedAnswer}
							onClick={handleNextQuestion}>
							Next Question
						</Button>
					) : (
						<Button
							type='primary'
							disabled={!selectedAnswer}
							onClick={handleShowResult}>
							Show Result
						</Button>
					)}
				</>
			}>
			{showResult ? (
				<div>
					<h2>
						Your score: {score}/{questions.length}
					</h2>
					<Button
						type='primary'
						onClick={handleRestart}>
						Restart Quiz
					</Button>
				</div>
			) : (
				<div>
					<h2>{currentQuestion.question}</h2>
					{currentQuestion.options.map((option) => (
						<Button
							key={option}
							type={selectedAnswer === option ? 'primary' : 'default'}
							onClick={() => handleAnswerSelect(option)}>
							{option}
						</Button>
					))}
				</div>
			)}
		</Modal>
	);
}

export default Quiz;
