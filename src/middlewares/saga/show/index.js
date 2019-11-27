import {takeLatest} from 'redux-saga/effects';
import {FETCH_TV_SHOW} from "../../../routes/show/store/actions";
import fetchTvShow from "./fetchTvShow";

export default function* showSaga () {
    yield takeLatest(FETCH_TV_SHOW, fetchTvShow);
}
