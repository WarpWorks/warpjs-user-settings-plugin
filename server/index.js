const express = require('express');
const hbs = require('hbs');
const hbsUtils = require('hbs-utils')(hbs);
const path = require('path');
const RoutesInfo = require('@quoin/expressjs-routes-info');
const warpjsUtils = require('@warp-works/warpjs-utils');

const constants = require('./../lib/constants');
const routes = require('./routes');

const repoRoot = path.dirname(require.resolve('../package.json'));

module.exports = (config, warpCore, baseUrl, staticUrl) => {
    const app = express();

    baseUrl = (baseUrl === '/') ? '' : baseUrl;

    app.set(constants.appKeys.baseUrl, baseUrl);
    app.set(constants.appKeys.staticUrl, staticUrl);
    app.set(constants.appKeys.pluginConfig, config);
    app.set(constants.appKeys.warpCore, warpCore);

    RoutesInfo.staticPath(constants.routes.assets, app, baseUrl, '/assets', path.join(repoRoot, constants.folders.assets));

    app.set('view engine', 'hbs');
    app.set('views', warpjsUtils.getHandlebarsViewsDir());
    const handlebarsPartialsDir = warpjsUtils.getHandlebarsPartialsDir();
    hbsUtils.registerWatchedPartials(
        handlebarsPartialsDir,
        {
            precompile: true,
            name: (template) => template.replace(/_/g, '-')
        },
        () => {}
    );

    app.use(routes(baseUrl || '/').router);

    return app;
};
