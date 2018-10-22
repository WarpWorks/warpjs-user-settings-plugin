const loadGruntConfig = require('load-grunt-config');
const timeGrunt = require('time-grunt');

module.exports = (grunt) => {
    timeGrunt(grunt);

    loadGruntConfig(grunt, {
        jitGrunt: {
            staticMappings: {}
        }
    });
};
