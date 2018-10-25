// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'babel-regenerator-runtime';
import debug from 'debug';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import * as appActionCreators from './app/action-creators';
import store from './store';

const log = debug('W2:plugin:user-settings:client/index');

(($) => $(document).ready(async () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        $(window.WarpJS.CONTENT_PLACEHOLDER).get(0)
    );

    const result = await window.WarpJS.getCurrentPageHAL($);
    const state = window.WarpJS.flattenHAL(result.data);

    log("state=", state);
    if (state.warpjsUser) {
        store.dispatch(appActionCreators.updateSelectedKey('profile'));
    } else {
        store.dispatch(appActionCreators.notLogged());
    }
}))(jQuery);
