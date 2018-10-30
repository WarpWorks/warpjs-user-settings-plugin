import Component from './component';
import constants from './../../lib/constants';
import * as utils from './../utils';
import { wrapContainer } from './../react-utils';

// import debug from './../debug';
// const log = debug('client/profile/container');

const mapStateToProps = (state) => Object.freeze({
    loggedIn: state.loggedIn,

    name: utils.getField(state, constants.fields.Name)
});

const mapDispatchToProps = (dispatch, ownProps) => Object.freeze({});

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps);
