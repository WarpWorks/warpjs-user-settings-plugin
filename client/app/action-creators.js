import actions from './actions';
// import debug from './../debug';

// const log = debug('client/sidebar/action-creators');

export const loggedIn = () => Object.freeze({
    type: actions.LOGGED_STATE,
    payload: {
        loggedIn: true
    }
});

export const setUser = (warpjsUser) => Object.freeze({
    type: actions.SET_USER,
    payload: warpjsUser
});

export const selectSection = (key) => Object.freeze({
    type: actions.SELECT_SECTION,
    payload: { key }
});
