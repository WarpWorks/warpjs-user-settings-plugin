const path = require('path');

const constants = require('./../lib/constants');

module.exports = (grunt, options) => Object.freeze({
    options: {
        compress: true
    },
    style: {
        dest: path.join('assets', constants.assets.css),
        src: path.join('client', 'style.less')
    }
});
