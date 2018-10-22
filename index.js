const ActionPlugin = require('@warp-works/warpjs-action-plugin');
const RoutesInfo = require('@quoin/expressjs-routes-info');

const { routes } = require('./lib/constants');
const packageJson = require('./package.json');
const server = require('./server');

class UserSettingsPlugin extends ActionPlugin {
    constructor(config, warpCore, pluginType) {
        super(config, warpCore, packageJson, pluginType);
    }

    get app() {
        return (baseUrl, staticUrl) => server(this.config, this.warpCore, baseUrl, staticUrl);
    }

    get jsScriptUrl() {
        // This plugin doesn't need any UI on top of warpjs. It's independant.
        return null;
    }

    getRootUrl(domain, type, id) {
        return RoutesInfo.expand(routes.root, {});
    }
}

module.exports = UserSettingsPlugin;
