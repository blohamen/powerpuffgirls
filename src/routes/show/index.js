import React from 'react';
import {connect} from 'react-redux';
import {fetchTvShow} from "./store/actions";

const SHOW_NAME = 'the-powerpuff-girls';

function ShowPage({fetchTvShow}) {
    return (
        <div>
            Main page
            <button onClick={() =>
                fetchTvShow({
                    showName: SHOW_NAME
                })
            }>
                Fetch
            </button>
        </div>
    )
}

const mapDispatchToProps = {fetchTvShow};

export default connect(
    null,
    mapDispatchToProps,
)(ShowPage)
