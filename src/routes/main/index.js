import React from 'react';
import {connect} from 'react-redux';
import {fetchTvShow} from "./store/actions";

function MainPage({fetchTvShow}) {
    return (
        <div>
            Main page
            <button onClick={() => fetchTvShow()}>Fetch</button>
        </div>
    )
}

const mapDispatchToProps = {fetchTvShow};

export default connect(
    null,
    mapDispatchToProps,
)(MainPage)
