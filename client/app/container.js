import { connect } from 'react-redux';

import * as actionCreators from './action-creators';
import Component from './component';
import errorBoundary from './../react-utils/error-boundary';

const mapStateToProps = (state) => Object.freeze({
    initialized: state.initialized,
    loggedIn: state.loggedIn
});

const mapDispatchToProps = (dispatch) => {
    return {
        selectSection: (key) => dispatch(actionCreators.selectSection(key))
    };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

Container.displayName = 'AppContainer';

export default errorBoundary(Container);
