import { connect } from 'react-redux';

import Component from './component.jsx';

function mapStateToProps(state) {
    // eslint-disable-next-line no-console
    console.log("container.mapStateToProps: state=", state);
    return {
        hello: 'world'
    };
}

export default connect(mapStateToProps)(Component);
