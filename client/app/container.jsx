import { connect } from 'react-redux';

import Component from './component.jsx';

function mapStateToProps(state) {
    // eslint-disable-next-line no-console
    console.log("container.mapStateToProps: state=", state);
    return Object.freeze({
        initialized: state.initialized
    });
}

export default connect(mapStateToProps)(Component);
