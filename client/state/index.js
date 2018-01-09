import { combineReducers, createStore } from 'redux';
import players from './players/reducers';

const reducers = combineReducers({ players });

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
