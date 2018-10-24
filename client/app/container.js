import { connect } from 'react-redux';

import Component from './component';
import errorBoundary from './../react-utils/error-boundary';

function mapStateToProps(state) {
    // eslint-disable-next-line no-console
    console.log("container.mapStateToProps: state=", state);
    return Object.freeze({
        initialized: state.initialized
    });
}

const Container = connect(mapStateToProps)(Component);

Container.displayName = 'AppContainer';

export default errorBoundary(Container);
