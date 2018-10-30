import debug from './../debug';
const log = debug('client/utils/get-field');

export default (state, fieldName, stateIsClone = false) => {
    log(`(state, fieldName=${fieldName}, stateIsClone=${stateIsClone})`);

    if (state && state.user && state.user.fields && state.user.fields.length) {
        let field = state.user.fields.find((field) => field.field === fieldName);
        if (!field) {
            field = {
                field: fieldName,
                value: null
            };
        }
        return stateIsClone ? field : Object.freeze(field);
    } else {
        return null;
    }
};
