// import debug from 'debug';

import actions from './actions';

// const log = debug('W2:plugin:user-settings:client/sidebar/action-creators');

export const updateSelectedKey = (key) => Object.freeze({
    type: actions.UPDATE_SELECTED_KEY,
    payload: {
        key
    }
});

export const selectSection = (key) => Object.freeze({
    type: actions.SELECT_SECTION,
    payload: { key }
});
