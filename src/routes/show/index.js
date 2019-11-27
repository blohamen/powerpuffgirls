import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchTvShow} from "./store/actions";
import EpisodeCard from "../../components/episode-card";
import episodeCardStyles from '../../components/episode-card/EpisodeCard.module.css';
import ShowPageContainer from "../../components/containers/show-page-container";

const SHOW_NAME = 'the-powerpuff-girls'; // stubbed value

function ShowPage({fetchTvShow, showData, isLoading}) {
    useEffect(() => {
        if (showData.id === null) {
            fetchTvShow({
                showName: SHOW_NAME
            });
        }
    }, [fetchTvShow, showData.id]);

    const renderEpisodeCard = (episode, index) => (
        <div key={index} className={episodeCardStyles.episodeCardContainerMargin}>
            <EpisodeCard {...episode}/>
        </div>
    );

    const renderLoader = () => (
        <div>Show is loading</div>
    );

    return (
        <div>
            {(isLoading || !showData.id)
                ? renderLoader()
                : <ShowPageContainer
                    renderEpisodeCard={renderEpisodeCard}
                    {...showData}
                />
            }
        </div>
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
