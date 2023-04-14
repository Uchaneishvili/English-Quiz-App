/** @format */

import React from 'react';
import { Modal } from 'antd';

function InitialModal() {
	return (
		<Modal
			open={true}
			title={<h2>Dice Game Rules</h2>}
			footer={null}>
			<h2>Objective:</h2>
			<p>
				The objective of the game is to score the most points by rolling five
				dice.
			</p>
			<h2>Gameplay:</h2>
			<ol>
				<li>Each player takes turns rolling five dice.</li>
				<li>
					After each roll, the player can choose to keep any number of dice and
					reroll the others, or keep all of the dice.
				</li>
				<li>
					After the player has finished rolling, they score points based on the
					combination of their dice.
				</li>
				<li>
					The player with the highest total score at the end of the game wins.
				</li>
			</ol>
			<h2>Scoring:</h2>
			<p>Players score points based on the following combinations of dice:</p>
			<ul>
				<li>
					<strong>Three of a Kind:</strong> Three dice showing the same number
					score 10 points.
				</li>
				<li>
					<strong>Four of a Kind:</strong> Four dice showing the same number
					score 20 points.
				</li>
				<li>
					<strong>Five of a Kind:</strong> Five dice showing the same number
					score 50 points.
				</li>
				<li>
					<strong>Full House:</strong> Three of a kind and a pair score 25
					points.
				</li>
				<li>
					<strong>Straight:</strong> A sequence of five dice (1-5 or 2-6) score
					30 points.
				</li>
				<li>
					<strong>Chance:</strong> Any combination of dice scores the total of
					all the dice.
				</li>
			</ul>
			<h2>End of Game:</h2>
			<p>
				The game ends when all players have taken an equal number of turns. The
				player with the highest total score at the end of the game wins.
			</p>
		</Modal>
	);
}

export default InitialModal;
