import React from 'react';

import renderer from 'react-test-renderer';
import EpisodeCard from "../";

jest.mock('react-router-dom', () => ({
    Link: 'Link',
}));

describe('Episode card component',() => {
    const episodeCardData = {
        id: 1,
        name: "Test",
        image: {
            medium: 'someUrl',
        },
    };
    it('should renders correctly with image', () => {
        const cmp = renderer.create(
            <EpisodeCard {...episodeCardData} />
        );
        expect(cmp.toJSON()).toMatchSnapshot();
    });
    it('should renders correctly only with name', () => {
        const cmp = renderer.create(
            <EpisodeCard id={episodeCardData.id} name={episodeCardData.name} />
        );
        expect(cmp.toJSON()).toMatchSnapshot();
    })
})
