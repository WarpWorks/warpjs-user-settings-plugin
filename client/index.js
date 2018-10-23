// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'babel-regenerator-runtime';

(($) => $(document).ready(async () => {
    const result = await window.WarpJS.getCurrentPageHAL($);
    // eslint-disable-next-line no-console
    console.log("result=", result);
}))(jQuery);
