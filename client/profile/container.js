import pick from 'lodash/pick';
import { connect } from 'react-redux';

import Component from './component';
import errorBoundary from './../react-utils/error-boundary';

const mapStateToProps = (state) => pick(state, ['user']);

const mapDispatchToProps = (dispatch) => {
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
Container.displayName = 'ProfileContainer';

export default errorBoundary(Container);
