const debug = require('debug')('W2:plugin:user-settings:server/root/get-user-settings');
const RoutesInfo = require('@quoin/expressjs-routes-info');
const warpjsUtils = require('@warp-works/warpjs-utils');

const constants = require('./../../lib/constants');

module.exports = async (req, res) => {
    debug("req.warpjsUser=", req.warpjsUser);

    warpjsUtils.wrapWith406(res, {
        html: () => warpjsUtils.sendPortalIndex(
            req, res, RoutesInfo, "User Settings",
            [
                `${req.app.get('base-url')}/assets/${constants.assets.jsVendor}`,
                `${req.app.get('base-url')}/assets/${constants.assets.js}`
            ],
            `${req.app.get('base-url')}/assets/${constants.assets.css}`
        ),

        [warpjsUtils.constants.HAL_CONTENT_TYPE]: async () => {
            debug("get with HAL_CONTENT_TYPE");
            const resource = warpjsUtils.createResource(req, {
            });

            warpjsUtils.sendHal(req, res, resource, RoutesInfo);
        }

    });
};
