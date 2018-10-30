import Component from './component';
import { wrapContainer } from './../react-utils';

import debug from './../debug';
const log = debug('client/change-password/container');

const mapStateToProps = (state, ownProps) => {
    log(`mapStateToProps(): ownProps=`, ownProps);
    return Object.freeze({
    });
};

const mapDispatchToProps = (dispatch, ownProps) => Object.freeze({
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.freeze({
    ...stateProps,
    ...dispatchProps,
    ...ownProps
});

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps, mergeProps);
