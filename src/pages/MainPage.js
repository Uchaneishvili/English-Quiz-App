/** @format */

import React, { useState } from 'react';
import Quiz from '../components/Quiz';
import Dice from '../components/Dice';
import { Button } from 'antd';

function MainPage() {
	const [isEnabled, setIsEnabled] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState(null);

	const questions = [
		{
			question:
				'Which of the following is a type of sentence that gives a command or makes a request?',
			options: ['Interrogative', 'Exclamatory', 'Imperative', 'Declarative'],
			answer: 'Imperative',
		},
		// {
		// 	question:
		// 		"What is the correct spelling of the word that means 'extremely beautiful'?",
		// 	options: ['Gorgeous', 'Gorgous', 'Gorgeus', 'Gorgius'],
		// 	answer: 'Gorgeous',
		// },
		// {
		// 	question:
		// 		"Which of the following is a type of figurative language that compares two unlike things using 'like' or 'as'?",
		// 	options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
		// 	answer: 'Simile',
		// },
		// {
		// 	question:
		// 		'What is the name for a word that has the same or nearly the same meaning as another word?',
		// 	options: ['Antonym', 'Synonym', 'Homonym', 'Heteronym'],
		// 	answer: 'Synonym',
		// },
		// {
		// 	question: "What is the plural of the word 'goose'?",
		// 	options: ['Geese', 'Gooses', 'Geeses', 'Gice'],
		// 	answer: 'Geese',
		// },
		// {
		// 	question:
		// 		'Which of the following is a type of sentence that expresses strong emotion?',
		// 	options: ['Interrogative', 'Exclamatory', 'Imperative', 'Declarative'],
		// 	answer: 'Exclamatory',
		// },
		// {
		// 	question:
		// 		"What is the correct spelling of the word that means 'the act of making something less severe'?",
		// 	options: ['Mitigation', 'Mitagation', 'Mittigation', 'Mittagation'],
		// 	answer: 'Mitigation',
		// },
		// {
		// 	question:
		// 		'Which of the following is a type of figurative language that gives human qualities to non-human things?',
		// 	options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
		// 	answer: 'Personification',
		// },
		// {
		// 	question:
		// 		'What is the name for a word that is spelled the same as another word, but has a different meaning?',
		// 	options: ['Antonym', 'Synonym', 'Homonym', 'Heteronym'],
		// 	answer: 'Homonym',
		// },
	];

	const currentQuestion = questions[currentQuestionIndex];

	const handleNextQuestion = () => {
		const currentQuestion = questions[currentQuestionIndex];

		if (currentQuestion.answer === selectedAnswer) {
			setScore(score + 1);
		}
		setCurrentQuestionIndex(currentQuestionIndex + 1);
		setShowResult(false);
	};

	const handleShowResult = () => {
		setShowResult(true);

		const currentQuestion = questions[currentQuestionIndex];
		if (currentQuestion.answer === selectedAnswer) {
			setScore(score + 1);
		}
	};

	const handleRestart = () => {
		setCurrentQuestionIndex(0);
		setScore(0);
		setShowResult(false);
		setSelectedAnswer(false);
		setIsEnabled(false);
	};

	return (
		<div>
			<Dice />
			<Button onClick={() => setIsEnabled(true)}>Press Me!</Button>

			{isEnabled && (
				<Quiz
					enabled={isEnabled}
					setEnabled={setIsEnabled}
					handleShowResult={handleShowResult}
					handleNextQuestion={handleNextQuestion}
					handleRestart={handleRestart}
					currentQuestion={currentQuestion}
					questions={questions}
					showResult={showResult}
					score={score}
					selectedAnswer={selectedAnswer}
					setSelectedAnswer={setSelectedAnswer}
					currentQuestionIndex={currentQuestionIndex}
				/>
			)}
		</div>
	);
}

export default MainPage;
