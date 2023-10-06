import { createSlice } from '@reduxjs/toolkit';
import { ActionInterface } from '../models/types';

const initialState = {
	countdown: {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	},
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setCountdown: (state, action: ActionInterface) => {
			state.countdown = action.payload;
		},
	},
});

export const { setCountdown } = counterSlice.actions;
export default counterSlice.reducer;
