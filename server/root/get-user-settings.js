// const debug = require('debug')('W2:plugin:user-settings:server/root/get-user-settings');
const RoutesInfo = require('@quoin/expressjs-routes-info');
const warpjsUtils = require('@warp-works/warpjs-utils');

const constants = require('./../../lib/constants');

module.exports = async (req, res) => {
    // debug("req.warpjsUser=", req.warpjsUser);

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
            const resource = warpjsUtils.createResource(req, {
            });

            if (req.warpjsUser) {
                const config = req.app.get(constants.appKeys.pluginConfig);
                // debug("config=", config);
                const warpCore = req.app.get(constants.appKeys.warpCore);
                const Persistence = require(config.persistence.module);
                const persistence = new Persistence(config.persistence.host, config.persistence.name);

                try {
                    const domain = await warpCore.getDomainByName(config.domainName);
                    const entity = domain.getEntityByInstance({type: req.warpjsUser.type});
                    const instance = await entity.getInstance(persistence, req.warpjsUser.id);
                    // debug("instance=", instance);

                    const userResource = warpjsUtils.createResource(req, {
                        type: entity.name,
                        typeID: entity.id,
                        id: instance.id
                    });

                    resource.embed('users', userResource);

                    userResource.embed('fields', warpjsUtils.createResource('', {
                        field: constants.fields.Name,
                        value: instance.Name
                    }));


                } finally {
                    persistence.close();
                }
            }

            warpjsUtils.sendHal(req, res, resource, RoutesInfo);
        }

    });
};
