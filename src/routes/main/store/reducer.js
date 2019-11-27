import {handleActions} from 'redux-actions';
import {FETCH_TV_SHOW, FETCH_TV_SHOW_SUCCESS} from "./actions";

const initialState = {
    isLoading: false,
    payload: null,
};

export default handleActions({
    [FETCH_TV_SHOW]: (state, { payload }) => ({
        ...state,
        isLoading: true,
    }),
    [FETCH_TV_SHOW_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
    })
},
    initialState
)
