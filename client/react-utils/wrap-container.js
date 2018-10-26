import { connect } from 'react-redux';

import errorBoundary from './error-boundary';

export default (Component, mapStateToProps, mapDispatchToProps, mergeProps) => {
    const Container = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component);
    Container.displayName = `${Component.displayName}Container`;
    return errorBoundary(Container);
};
