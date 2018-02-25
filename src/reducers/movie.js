import { Map, List } from 'immutable';

import * as actionTypes from '../actions/movie';


const initialState = new Map({
	movies: new Map({
		isLoaded: false,
		data: [],
	}),
});

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_MOVIES_LOADED : {
			const { loaded = false } = action.payload;

			return state.updateIn(['movies', 'isLoaded'], () => {
				return loaded;
			});
		}
		case actionTypes.FETCH_MOVIES : {
			const movies = action.payload;

			return state.update('movies', () => {
				return new Map({
					isLoaded: true,
					data: movies,
				});
			});
		}
		default:
			return state;
	}
};
