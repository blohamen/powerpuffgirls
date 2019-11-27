import React from 'react'
import {useParams} from 'react-router-dom';

export default function EpisodePage() {
    const {id} = useParams();
    return (
        <div>
            Episode page with {id}
        </div>
    )
}
