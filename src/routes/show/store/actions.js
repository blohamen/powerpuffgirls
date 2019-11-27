import {createAction} from 'redux-actions';

export const FETCH_TV_SHOW = 'FETCH_TV_SHOW';
export const FETCH_TV_SHOW_SUCCESS = 'FETCH_TV_SHOW_SUCCESS';

export const fetchTvShow = createAction(FETCH_TV_SHOW);
export const fetchTvShowSuccess = createAction(FETCH_TV_SHOW_SUCCESS);
