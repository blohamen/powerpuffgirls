import {call, put} from 'redux-saga/effects';
import fetchData from "../fetchData";
import config from "../../../config/config";
import {fetchTvShowSuccess} from "../../../routes/show/store/actions";

export default function* fetchTvShow({ payload }) {
    try {
        const {showName} = payload;
        const showUrl = `${config.tvApiUrl}/singlesearch/shows?q=${showName}`;
        const response =  yield call(fetchData, showUrl);
        yield put(fetchTvShowSuccess(response));
    }
    catch (e) {
        console.warn(e);
    }
}
