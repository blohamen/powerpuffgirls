import {call, put} from 'redux-saga/effects';
import fetchData from "../fetchData";
import config from "../../../config/config";
import {fetchTvShowSuccess} from "../../../routes/show/store/actions";

export default function* fetchTvShow({ payload }) {
    try {
        const {showName} = payload;
        const showUrl = `${config.tvApiUrl}/singlesearch/shows?q=${showName}`;
        const tvShow =  yield call(fetchData, showUrl);
        const showEpisodesUrl = `${config.tvApiUrl}/shows/${tvShow.id}/episodes`;
        const showEpisodes = yield call(fetchData, showEpisodesUrl);
        yield put(fetchTvShowSuccess({
            ...tvShow,
            episodes: showEpisodes,
        }));
    }
    catch (e) {
        console.warn(e);
    }
}
