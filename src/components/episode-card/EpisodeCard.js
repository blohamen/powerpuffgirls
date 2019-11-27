import React from 'react';
import styles from './EpisodeCard.module.css';
import {Link} from "react-router-dom";

export default function EpisodeCard({id, name}) {
    return (
        <Link to={`/episode/${id}`}>
            <div className={styles.episodeCard}>{name}</div>
        </Link>
    )
}
