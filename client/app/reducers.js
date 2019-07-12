import cloneDeep from 'lodash/cloneDeep';
import extend from 'lodash/extend';
import reduxConcatenateReducers from 'redux-concatenate-reducers';

import actions from './actions';
import autoSaveFieldReducers from './../auto-save-field/reducers';
import sidebarReducers from './../sidebar/reducers';
import * as reactUtils from './../react-utils';
// import debug from './../debug';

// const log = debug('client/app/reducers');

const updateLoggedState = (state = {}, action) => extend(cloneDeep(state), {
    loggedIn: action.payload.loggedIn
});
updateLoggedState.displayName = 'updateLoggedState';

const updateInitilized = (state = {}, action) => extend(cloneDeep(state), {
    initialized: true
});
updateInitilized.displayName = 'updateInitilized';

const setUser = (state = {}, action) => extend(cloneDeep(state), {
    user: action.payload
});
setUser.displayName = 'setUser';

export default reduxConcatenateReducers([
    reactUtils.guardAction([ actions.LOGGED_STATE ], updateLoggedState),
    reactUtils.guardAction([ actions.SET_USER ], setUser),
    reactUtils.guardAction([ actions.SET_USER ], updateInitilized),
    autoSaveFieldReducers,
    sidebarReducers
]);
