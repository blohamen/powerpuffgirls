import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShowPageContainer.module.css';
import excludeHtmlTags from "../../../helpers/excludeHtmlTags";

export default function ShowPageContainer({name, summary, image, episodes, renderEpisodeCard}) {
    return (
        <div className={styles.pageContainer}>
            <div>
                <h1>{name}</h1>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.logoContainer}>
                    <img src={image.medium} alt={'show image'} />
                </div>
                <div>
                    <p>{excludeHtmlTags(summary)}</p>
                </div>
            </div>
            <div>
                <div>
                    <h2>Episodes</h2>
                </div>
                <div className={styles.episodesContainerContent}>
                    {episodes.map(renderEpisodeCard)}
                </div>
            </div>
        </div>
    );
}

ShowPageContainer.propTypes = {
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    episodes: PropTypes.array.isRequired,
    renderEpisodeCard: PropTypes.func.isRequired,
};
