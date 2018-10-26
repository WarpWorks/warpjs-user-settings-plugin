import * as actionCreators from './action-creators';
import Component from './component';
import wrapContainer from './../react-utils/wrap-container';

const mapStateToProps = (state, ownProps) => {
    const field = state.user.fields.find((field) => field.field === ownProps.field.field);
    return Object.freeze({
        status: field.saved ? 'saved' : field.saving ? 'saving' : field.dirty ? 'dirty' : 'clean'
    });
};

const mapDispatchToProps = (dispatch, ownProps) => Object.freeze({
    changed: (event) => dispatch(actionCreators.updateField(ownProps.field, event.target.value)),

    save: async (event) => {
        if (ownProps.field.dirty) {
            dispatch(actionCreators.savingField(ownProps.field));

            // FAKE
            setTimeout(() => {
                dispatch(actionCreators.savedField(ownProps.field));
                setTimeout(() => dispatch(actionCreators.resetField(ownProps.field)), 2000);
            }, 2000);
        }
    }
});

// const mergeProps = (stateProps, dispatchProps, ownProps) => Object.freeze({
//     ...stateProps,
//     ...dispatchProps,
//     ...ownProps
// });

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps);
