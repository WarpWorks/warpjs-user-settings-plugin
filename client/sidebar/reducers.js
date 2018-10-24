import cloneDeep from 'lodash/cloneDeep';
import extend from 'lodash/extend';
import reduxConcatenateReducers from 'redux-concatenate-reducers';

import * as actions from './actions';
import * as reactUtils from './../react-utils';

const updateSelectedKey = (state = {}, action) => extend(cloneDeep(state), {
    user: action.payload
});

export default reduxConcatenateReducers([
    reactUtils.guardAction([actions.UPDATE_SELECTED_KEY], updateSelectedKey)
]);
