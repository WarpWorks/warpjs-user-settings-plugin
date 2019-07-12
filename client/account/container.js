import Component from './component';
import constants from './../../lib/constants';
import * as utils from './../utils';
import { wrapContainer } from './../react-utils';

// import _debug from './debug'; const debug = _debug('container');

const mapStateToProps = (state, ownProps) => Object.freeze({
    email: utils.getField(state, constants.fields.Email)
});

const mapDispatchToProps = (dispatch, ownProps) => Object.freeze({
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.freeze({
    ...stateProps,
    ...dispatchProps,
    ...ownProps
});

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps, mergeProps);
