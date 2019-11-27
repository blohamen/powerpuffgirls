import {handleActions} from 'redux-actions';
import {FETCH_TV_SHOW, FETCH_TV_SHOW_SUCCESS} from "./actions";

const initialState = {
    isLoading: false,
    showData: {
        id: null,
        name: null,
        episodes: [],
    },
};

export default handleActions({
    [FETCH_TV_SHOW]: state => ({
        ...state,
        isLoading: true,
    }),
    [FETCH_TV_SHOW_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        showData: payload,
    })
},
    initialState
)
