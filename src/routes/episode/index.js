import React from 'react'
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import EpisodePageContainer from "../../components/containers/episode-page-container";

function EpisodePage({episodes}) {
    const { id } = useParams();
    const episodeData = episodes.find(episode => String(episode.id) === id);
    return (
       <EpisodePageContainer {...episodeData} />
    )
}

const mapStateToProps = (state) => ({
    episodes: state.show.showData.episodes,
});

export default connect(
    mapStateToProps,
    null
)(EpisodePage)
