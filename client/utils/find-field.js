import cloneDeep from 'lodash/cloneDeep';

export default (state = {}, action) => {
    const clone = cloneDeep(state);
    if (action && action.payload && action.payload.field && action.payload.field.field &&
        clone && clone.user && clone.user.fields && clone.user.fields.length) {
        const field = clone.user.fields.find((field) => field.field === action.payload.field.field);
        return Object.freeze({ clone, field });
    } else {
        return Object.freeze({ clone });
    }
};
