import React from 'react'
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {excludeHtmlTags} from "../show/service";

function EpisodePage({episodes}) {
    const { id } = useParams();
    const episodeData = episodes.find(episode => String(episode.id) === id);
    return (
        <div>
            <div>
                {episodeData.name}
            </div>
            <div>
                {excludeHtmlTags(episodeData.summary)}
            </div>
            <div>
                <img src={episodeData.image.medium}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    episodes: state.show.showData.episodes,
});

export default connect(
    mapStateToProps,
    null
)(EpisodePage)
