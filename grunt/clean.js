const constants = require('./../lib/constants');

module.exports = (grunt, options) => Object.freeze({
    default: {
        src: [
            constants.folders.assets
        ]
    }
});
