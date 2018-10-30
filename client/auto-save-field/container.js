import * as actionCreators from './action-creators';
import Component from './component';
import * as utils from '../utils';
import { wrapContainer } from './../react-utils';

import debug from './../debug';
const log = debug('client/auto-save-field/container');

const mapStateToProps = (state, ownProps) => {
    const field = ownProps.field ? utils.getField(state, ownProps.field.field) : {};
    return Object.freeze({
        status: field.saved ? 'saved' : field.saving ? 'saving' : field.dirty ? 'dirty' : 'clean',
        validationState: field.saved ? 'success' : field.saving ? 'warning' : field.dirty ? 'warning' : null
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
    log(`mapDispatchToProps(): ownProps=`, ownProps);
    return Object.freeze({
        changed: (event) => {
            log(`mapDispatchToProps(): changed(): ownProps=`, ownProps);
            dispatch(actionCreators.updateField(ownProps.field, event.target.value));
        },

        save: async (event) => {
            log(`mapDispatchToProps(): save(): ownProps=`, ownProps);
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
};

// const mergeProps = (stateProps, dispatchProps, ownProps) => Object.freeze({
//     ...stateProps,
//     ...dispatchProps,
//     ...ownProps
// });

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps);
