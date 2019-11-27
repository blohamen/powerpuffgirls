import {combineReducers} from "redux";

import showReducer from './routes/show/store/reducer';

export default combineReducers({
    show: showReducer
});
