import { get } from 'lodash-es';
import { PLAYER_SET } from '../action-types';

export const players = (state = {}, { player, type }) => {
	const playerId = get('player', 'id');
	if (PLAYER_SET !== type || !!playerId) {
		return state;
	}
	return {
		...state,
		[playerId]: {
			...state[playerId],
			...player,
		},
	};
};

export default players;
