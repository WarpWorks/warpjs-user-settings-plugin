// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'babel-regenerator-runtime';
// import debug from 'debug';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import * as appActionCreators from './app/action-creators';
import constants from './constants';
import * as sidebarActionCreators from './sidebar/action-creators';
import store from './store';

// const log = debug('W2:plugin:user-settings:client/index');

(($) => $(document).ready(async () => {
    const result = await window.WarpJS.getCurrentPageHAL($);
    const data = window.WarpJS.flattenHAL(result.data);

    if (data.warpjsUser) {
        store.dispatch(appActionCreators.loggedIn());

        if (data.users && data.users.length) {
            store.dispatch(appActionCreators.setUser(data.users[0]));
            store.dispatch(sidebarActionCreators.selectSection(constants.sections.profile));
        }
    }
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        $(window.WarpJS.CONTENT_PLACEHOLDER).get(0)
    );
}))(jQuery);
