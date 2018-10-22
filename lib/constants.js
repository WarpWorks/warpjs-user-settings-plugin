const ActionPlugin = require('@warp-works/warpjs-action-plugin');
const extend = require('lodash/extend');

const packageJson = require('./../package.json');

const NAMESPACE = 'W2:plugin:user-settings';

const baseConstants = ActionPlugin.baseConstants(packageJson);

module.exports = Object.freeze(extend({}, baseConstants, {
    entryPoints: Object.freeze({
        app: baseConstants.versionedName
    }),
    routes: Object.freeze({
        assets: `${NAMESPACE}/assets`,
        root: `${NAMESPACE}/root`
    })
}));