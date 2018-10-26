import Component from './component';
import constants from './../../lib/constants';
import wrapContainer from './../react-utils/wrap-container';

// import debug from './../debug';
// const log = debug('client/profile/container');

const mapStateToProps = (state) => Object.freeze({
    loggedIn: state.loggedIn,

    name: Object.freeze(state.user.fields.find((field) => field.field === constants.fields.Name))
});

const mapDispatchToProps = (dispatch, ownProps) => Object.freeze({});

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps);
