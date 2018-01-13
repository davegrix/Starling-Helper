'use strict';

let URL = 'https://api.starlingbank.com/api/v1/';
const rp = require('request-promise');

const getData = (key, requestURL) => {
    let options = {
        method: 'GET',
        uri: URL += requestURL,
        auth: {
            'bearer': key
        }
    };
    return rp(options);
};

module.exports = { getData };
