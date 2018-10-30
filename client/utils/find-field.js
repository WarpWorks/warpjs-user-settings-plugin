import cloneDeep from 'lodash/cloneDeep';

import getField from './get-field';

export default (state = {}, action) => {
    const clone = cloneDeep(state);
    const field = (action && action.payload && action.payload.field && action.payload.field.field &&
        clone && clone.user && clone.user.fields && clone.user.fields.length)
        ? getField(clone, action.payload.field.field, true)
        : null
    ;
    return Object.freeze({ clone, field });
};
