import {combineReducers} from "redux";

import mainReducer from './routes/main/store/reducer';

export default combineReducers({
    main: mainReducer
});
