/** @format */

import React from 'react';
import { Modal } from 'antd';

function Quiz() {
	const dataSource = [
		{
			question: "What is the plural of the word 'octopus'?",
			options: ['Octopuses', 'Octopi', 'Octopodes', 'Octopussies'],
			answer: 'Octopuses',
		},
		{
			question:
				"What is the correct spelling of the word that means 'the ability to speak or write a language fluently'?",
			options: ['Fluency', 'Fluencye', 'Fluensy', 'Fluencee'],
			answer: 'Fluency',
		},
		{
			question: "Which of the following is not a synonym for 'ubiquitous'?",
			options: ['Pervasive', 'Omnipresent', 'Widespread', 'Uncommon'],
			answer: 'Uncommon',
		},
		{
			question:
				'What is the name of the punctuation mark that is used to indicate a sudden break or interruption in a sentence?',
			options: ['Colon', 'Semicolon', 'Hyphen', 'Dash'],
			answer: 'Dash',
		},
		{
			question:
				'What is the name for a word that has the opposite meaning of another word?',
			options: ['Antonym', 'Synonym', 'Homonym', 'Heteronym'],
			answer: 'Antonym',
		},
	];

	return (
		<Modal title='Basic Modal'>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Modal>
	);
}

export default Quiz;
