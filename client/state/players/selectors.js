import { get } from 'lodash-es';

export const getPlayers = state => get(state, 'players');

export const getPlayer = (state, id) => get(state, ['players', id]);
