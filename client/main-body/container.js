import { connect } from 'react-redux';

import Component from './component';
import errorBoundary from './../react-utils/error-boundary';

const mapStateToProps = (state, ownProps) => {
    return Object.freeze({
        initialized: state.initialized,
        warpjsUser: state.warpjsUser
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return Object.freeze({
    });
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

Container.displayName = 'MainBodyContainer';

export default errorBoundary(Container);
