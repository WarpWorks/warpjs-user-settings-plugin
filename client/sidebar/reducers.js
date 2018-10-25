import cloneDeep from 'lodash/cloneDeep';
import debug from 'debug';
import extend from 'lodash/extend';
import reduxConcatenateReducers from 'redux-concatenate-reducers';

import actions from './actions';
import * as reactUtils from './../react-utils';

const log = debug('W2:plugin:user-settings:client/sidebar/reducers');

const updateSelectedKey = (state = {}, action) => {
    log("updateSelectedKey(): action=", action);
    return extend(cloneDeep(state), {
        user: action.payload
    });
};

export default reduxConcatenateReducers([
    reactUtils.guardAction([actions.UPDATE_SELECTED_KEY], updateSelectedKey)
]);
