// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'babel-regenerator-runtime';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import store from './store';

(($) => $(document).ready(async () => {
    // eslint-disable-next-line
    console.log("App=", App);

    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        $(window.WarpJS.CONTENT_PLACEHOLDER).get(0)
    );
}))(jQuery);
