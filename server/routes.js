const RoutesInfo = require('@quoin/expressjs-routes-info');

const { routes } = require('./../lib/constants');
const root = require('./root');

module.exports = (baseUrl) => {
    const routesInfo = new RoutesInfo('/', baseUrl);

    routesInfo.route(routes.root, '/', root);

    return routesInfo;
};
