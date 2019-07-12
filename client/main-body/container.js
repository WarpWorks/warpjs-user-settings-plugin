import pick from 'lodash/pick';

import Component from './component';
import { wrapContainer } from './../react-utils';

const mapStateToProps = (state) => Object.freeze(pick(state, [ 'initialized', 'loggedIn', 'selectedSection' ]));

const mapDispatchToProps = (dispatch, ownProps) => {
    return Object.freeze({
    });
};

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps);
