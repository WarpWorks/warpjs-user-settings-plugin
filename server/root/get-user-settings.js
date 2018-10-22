const RoutesInfo = require('@quoin/expressjs-routes-info');
const warpjsUtils = require('@warp-works/warpjs-utils');

const constants = require('./../../lib/constants');

module.exports = async (req, res) => {
    // console.log("req.warpjsUser=", req.warpjsUser);

    warpjsUtils.wrapWith406(res, {
        html: () => warpjsUtils.sendPortalIndex(
            req, res, RoutesInfo, "User Settings",
            [
                `${req.app.get('base-url')}/assets/${constants.assets.js}`
            ],
            `${req.app.get('base-url')}/assets/${constants.assets.css}`
        ),

        [warpjsUtils.constants.HAL_CONTENT_TYPE]: () => {
        }

    });

    res.status(200).send();
};
