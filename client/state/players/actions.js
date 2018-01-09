import { PLAYER_SET } from '../action-types';

export const setPlayer = player => ({
	type: PLAYER_SET,
	player,
});
