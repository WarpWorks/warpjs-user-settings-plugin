// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'babel-regenerator-runtime';
import debug from 'debug';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import store from './store';

const log = debug('W2:plugin:user-settings:client/index');

(($) => $(document).ready(async () => {
    log("process.env.NODE_ENV=", process.env.NODE_ENV);
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        $(window.WarpJS.CONTENT_PLACEHOLDER).get(0)
    );
}))(jQuery);
