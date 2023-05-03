/** @format */

import { useStore } from './store';

const addNumber = (number, p1) => {
	const { player1, player2 } = useStore.getState();

	if (p1 && player1) {
		useStore.setState({ player1: [...player1, number] });
	} else {
		useStore.setState({ player2: [...player2, number] });
	}
};
