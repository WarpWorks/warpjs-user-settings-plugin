import pick from 'lodash/pick';

import * as actionCreators from './action-creators';
import Component from './component';
import wrapContainer from './../react-utils/wrap-container';

const mapStateToProps = (state, ownProps) => Object.freeze(pick(state, ['initialized', 'loggedIn']));

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectSection: (key) => dispatch(actionCreators.selectSection(key))
    };
};

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps);
