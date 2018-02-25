import axios from 'axios';
import createAction from '../utils/createAction';

export const FETCH_MOVIES_LOADED = 'FETCH_MOVIES_LOADED';
export const FETCH_MOVIES = 'FETCH_MOVIES';


const getMovies = () => {
	return (dispatch) => {
		dispatch(createAction(FETCH_MOVIES_LOADED));

		const requestParams = Object.assign({}, {
			method: 'GET',
		});

		axios('http://demo7598512.mockable.io/movies', requestParams).then(res => res.data.movies).then((movies) => {
			dispatch(createAction(FETCH_MOVIES, movies));
		});
	};
};


export {
	getMovies,
};
