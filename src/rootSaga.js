import {spawn} from 'redux-saga/effects';
import showSaga from "./middlewares/saga/show";

export default function* rootSaga () {
    yield spawn(showSaga)
}
