'use strict';

const rp = require('request-promise');

const getData = (key, requestURL) => {
    let options = {
        method: 'GET',
        uri: 'https://api.starlingbank.com/api/v1/' + requestURL,
        auth: {
            'bearer': key
        }
    };
    return rp(options);
};

module.exports = { getData };
