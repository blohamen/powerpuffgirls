import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchTvShow} from "./store/actions";
import {excludeHtmlTags} from "./service";
import EpisodeCard from "../../components/episode-card";

const SHOW_NAME = 'the-powerpuff-girls';

function ShowPage({fetchTvShow, showData, isLoading}) {
    useEffect(() => {
        if (showData.id === null) {
            fetchTvShow({
                showName: SHOW_NAME
            });
        }
    }, [fetchTvShow, showData.id]);

    const renderEpisodeCard = (episode, index) => (
        <EpisodeCard key={index} {...episode}/>
    );

    const parsedSummary = excludeHtmlTags(showData.summary || '');
    return (
        <>
            {(isLoading || !showData.id)
                ? <div>Loading page</div>
                : (<div>
                        <div className="show-name">
                            Show name: {showData.name}
                        </div>
                        <div className="show-summary">
                            Show summary: {parsedSummary}
                        </div>
                        <div className="show-image">
                            <img src={showData.image.medium} alt={'show image'} />
                        </div>
                        <div className="show-episodes">
                            {showData.episodes.map(renderEpisodeCard)}
                        </div>
                    </div>)
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.show.isLoading,
    showData: state.show.showData
});

const mapDispatchToProps = {fetchTvShow};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShowPage)
