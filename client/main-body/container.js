import pick from 'lodash/pick';
import { connect } from 'react-redux';

import Component from './component';
import errorBoundary from './../react-utils/error-boundary';

const mapStateToProps = (state, ownProps) => {
    return Object.freeze(pick(state, ['initialized', 'selectedSection', 'user']));
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return Object.freeze({
    });
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

Container.displayName = 'MainBodyContainer';

export default errorBoundary(Container);
