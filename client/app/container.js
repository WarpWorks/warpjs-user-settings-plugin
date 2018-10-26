import pick from 'lodash/pick';

import Component from './component';
import wrapContainer from './../react-utils/wrap-container';

const mapStateToProps = (state, ownProps) => Object.freeze(pick(state, ['initialized', 'loggedIn']));

export default wrapContainer(Component, mapStateToProps);
