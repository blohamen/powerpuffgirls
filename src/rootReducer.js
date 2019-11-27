import {combineReducers} from "redux";

import mainReducer from './routes/show/store/reducer';

export default combineReducers({
    main: mainReducer
});
