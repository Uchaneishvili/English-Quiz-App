/** @format */

import { createStore } from 'redux';

// define initial state
const initialState = {
	numbers: [],
	activePlayer: 0,
};

// define actions
const ADD_NUMBER = 'ADD_NUMBER';
const CHANGE_PLAYER = 'CHANGE_PLAYER';

// define action creators
export const addNumber = (numberArr) => {
	return {
		type: ADD_NUMBER,
		payload: numberArr,
	};
};

export const setActivePlayer = (playerNumber) => {
	return {
		type: 'SET_ACTIVE_PLAYER',
		payload: playerNumber,
	};
};

export const resetNumbers = () => ({
	type: 'RESET_STATE',
	payload: initialState,
});

// define reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NUMBER:
			return {
				...state,
				numbers: [...state.numbers, action.payload],
			};

		case 'RESET_STATE':
			return action.payload;

		case 'SET_ACTIVE_PLAYER':
			return {
				...state,
				activePlayer: action.payload,
			};

		default:
			return state;
	}
};

// create store
const store = createStore(reducer);

export default store;
