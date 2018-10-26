import actions from './actions';

export const updateField = (field, value) => Object.freeze({
    type: actions.UPDATE_FIELD,
    payload: { field, value }
});

export const savingField = (field) => Object.freeze({
    type: actions.SAVING_FIELD,
    payload: {
        saving: true,
        field
    }
});

export const savedField = (field) => Object.freeze({
    type: actions.SAVED_FIELD,
    payload: {
        saving: false,
        saved: true,
        field
    }
});

export const resetField = (field) => Object.freeze({
    type: actions.RESET_FIELD,
    payload: {
        field
    }
});
