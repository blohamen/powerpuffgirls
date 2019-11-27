import React from 'react';
import PropTypes from 'prop-types';
import styles from './EpisodeCard.module.css';
import {Link} from "react-router-dom";

export default function EpisodeCard({id, name, image}) {
    const renderName = () => (
        <span>{name}</span>
    );
    const renderImage = () => (
        <img className={styles.episodeCardImage} src={image.medium}/>
    );
    return (
        <Link to={`/episode/${id}`}>
            <div className={styles.episodeCard}>
                {image
                    ? renderImage()
                    : renderName()
                }
            </div>
        </Link>
    )
}

EpisodeCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object,
};
