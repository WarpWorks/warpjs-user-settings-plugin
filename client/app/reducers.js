import cloneDeep from 'lodash/cloneDeep';
import extend from 'lodash/extend';
import reduxConcatenateReducers from 'redux-concatenate-reducers';

import actions from './actions';
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

const selectSection = (state = {}, action) => extend(cloneDeep(state), {
    selectedSection: action.payload.key
});
selectSection.displayName = 'selectSection';

export default reduxConcatenateReducers([
    reactUtils.guardAction([actions.LOGGED_STATE], updateLoggedState),
    reactUtils.guardAction([actions.SET_USER], setUser),
    reactUtils.guardAction([actions.SET_USER], updateInitilized),
    reactUtils.guardAction([actions.SELECT_SECTION], selectSection)
]);
