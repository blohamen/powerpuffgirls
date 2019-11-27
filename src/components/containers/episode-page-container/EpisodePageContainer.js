import React from 'react';
import styles from './EpisodePageContainer.module.css';
import excludeHtmlTags from "../../../helpers/excludeHtmlTags";

export default function EpisodePageContainer({name, summary, image, season, number, runtime}) {
    return (
        <div className={styles.episodePageContainer}>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                {season && <span>Season: {season} </span>}
                {number && <span>Episode: {number} </span>}
                {runtime && <span>Runtime: {runtime} </span>}
            </div>
            <div>
                <p>{excludeHtmlTags(summary || '')}</p>
            </div>
            <div>
                {image && <img src={image.medium}/>}
            </div>
        </div>
    )
}
