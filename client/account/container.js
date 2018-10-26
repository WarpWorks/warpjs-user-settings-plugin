import Component from './component';
import wrapContainer from './../react-utils/wrap-container';

const mapStateToProps = (state, ownProps) => {
    return Object.freeze({
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return Object.freeze({
    });
};

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps);
