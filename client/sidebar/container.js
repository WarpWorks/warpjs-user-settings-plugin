// import debug from 'debug';
import { connect } from 'react-redux';

import * as actionCreators from './action-creators';
import Component from './component';
import errorBoundary from './../react-utils/error-boundary';

// const log = debug('W2:plugin:user-settings:client/sidebar/container');

const mapStateToProps = (state, ownProps) => {
    // log(`mapStateToProps(): state=`, state);
    // log(`mapStateToProps(): ownProps=`, ownProps);
    return Object.freeze({
        selectedItem: state.selectedItem,
        sidebarItems: state.sidebarItems
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
    // log(`mapDispatchToProps(): ownProps=`, ownProps);
    return Object.freeze({
        updateSelectedKey: actionCreators.updateSelectedKey
    });
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

Container.displayName = 'SidebarContainer';

export default errorBoundary(Container);
