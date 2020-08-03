import { CREATE_POST } from './types';
import { showAlert } from './actions';

const forbiddenWords = ['fuck', 'bitch', 'dumb', 'php'];

export function forbiddenWordsMiddleware({ dispatch }) {
	return function (next) {
		return function (action) {
			if (action.type === CREATE_POST) {
				const found = forbiddenWords.filter((word) =>
					action.payload.title.toLowerCase().includes(word)
				);
				if (found.length) {
					return dispatch(showAlert('Please, dont use bad words!'));
				}
			}
			return next(action);
		};
	};
}
