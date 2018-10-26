// import debug from 'debug';

import Component from './component';
import wrapContainer from './../react-utils/wrap-container';

// const log = debug('W2:plugin:user-settings:client/sidebar/container');

const mapStateToProps = (state, ownProps) => {
    // log(`mapStateToProps(): state=`, state);
    // log(`mapStateToProps(): ownProps=`, ownProps);
    return Object.freeze({
        selectedSection: state.selectedSection
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps);
