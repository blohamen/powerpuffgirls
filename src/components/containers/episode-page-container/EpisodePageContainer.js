import React from 'react';
import excludeHtmlTags from "../../../helpers/excludeHtmlTags";

export default function EpisodePageContainer({name, summary, image}) {
    return (
        <div>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <p>{excludeHtmlTags(summary)}</p>
            </div>
            <div>
                {image && <img src={image.medium}/>}
            </div>
        </div>
    )
}
