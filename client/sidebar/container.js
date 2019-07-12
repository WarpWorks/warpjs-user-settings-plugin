import pick from 'lodash/pick';

import * as actionCreators from './action-creators';
import Component from './component';
import { wrapContainer } from './../react-utils';

// import debug from './../debug';
// const log = debug('client/sidebar/container');

const mapStateToProps = (state, ownProps) => Object.freeze(pick(state, [ 'selectedSection' ]));

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectSection: (selectedSection) => (key) => {
        if (selectedSection !== key) {
            dispatch(actionCreators.selectSection(key));
        }
    }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.freeze({
    ...stateProps,
    ...dispatchProps,
    selectSection: dispatchProps.selectSection(stateProps.selectedSection),
    ...ownProps
});

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps, mergeProps);
