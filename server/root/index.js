const getUserSettings = require('./get-user-settings');

module.exports = Object.freeze({
    get(req, res) {
        getUserSettings(req, res);
    }
});
