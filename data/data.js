'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /data
 */
module.exports = {
    /**
     * summary: Create a data
     * description: 
     * parameters: data
     * produces: 
     * responses: 201, default
     * operationId: createdata
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/data',
                operation: 'post',
                response: '201'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/data',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
