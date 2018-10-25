// import debug from 'debug';
import { connect } from 'react-redux';

import Component from './component';
import errorBoundary from './../react-utils/error-boundary';

// const log = debug('W2:plugin:user-settings:client/sidebar/container');

const mapStateToProps = (state, ownProps) => {
    // log(`mapStateToProps(): state=`, state);
    // log(`mapStateToProps(): ownProps=`, ownProps);
    return Object.freeze({
        selectedSection: state.selectedSection
    });
};

const Container = connect(mapStateToProps)(Component);

Container.displayName = 'SidebarContainer';

export default errorBoundary(Container);
