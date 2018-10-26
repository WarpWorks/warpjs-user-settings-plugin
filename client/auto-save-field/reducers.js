import reduxConcatenateReducers from 'redux-concatenate-reducers';

import actions from './actions';
import * as reactUtils from './../react-utils';
import * as utils from './../utils';

const updateField = (state = {}, action) => {
    const { clone, field } = utils.findField(state, action);
    if (field) {
        field.value = action.payload.value;
        field.dirty = true;
        field.saving = false;
        field.saved = false;
    }
    return clone;
};
updateField.displayName = 'updateField';

const savingField = (state = {}, action) => {
    const { clone, field } = utils.findField(state, action);
    if (field) {
        field.saving = action.payload.saving;
        field.saved = false;
    }
    return clone;
};
savingField.displayName = 'savingField';

const savedField = (state = {}, action) => {
    const { clone, field } = utils.findField(state, action);
    if (field) {
        field.saved = action.payload.saved;
        if (action.payload.saved) {
            field.dirty = false;
        }
    }
    return clone;
};
savedField.displayName = 'savedField';

const resetField = (state = {}, action) => {
    const { clone, field } = utils.findField(state, action);
    if (field) {
        field.dirty = false;
        field.saving = false;
        field.saved = false;
    }
    return clone;
};
resetField.displayName = 'resetField';

export default reduxConcatenateReducers([
    reactUtils.guardAction([actions.UPDATE_FIELD], updateField),
    reactUtils.guardAction([actions.SAVING_FIELD, actions.SAVED_FIELD], savingField),
    reactUtils.guardAction([actions.SAVED_FIELD], savedField),
    reactUtils.guardAction([actions.RESET_FIELD], resetField)
]);
