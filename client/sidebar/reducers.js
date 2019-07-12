import cloneDeep from 'lodash/cloneDeep';
import extend from 'lodash/extend';
import reduxConcatenateReducers from 'redux-concatenate-reducers';

import actions from './actions';
import * as reactUtils from './../react-utils';

// import debug from './../debug';
// const log = debug('client/sidebar/reducers');

const selectSection = (state = {}, action) => extend(cloneDeep(state), {
    selectedSection: action.payload.key
});
selectSection.displayName = 'selectSection';

export default reduxConcatenateReducers([
    reactUtils.guardAction([ actions.SELECT_SECTION ], selectSection)
]);
