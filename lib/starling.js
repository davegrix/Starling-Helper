'use strict';

let apiKey = '';
let params = {};

const constants = require('./constants');
const data = require('./getData');

exports.init = (_apiKey) => {
    apiKey = _apiKey;
};

exports.params = (_params) => {
    params = _params;
};


exports.getData = async(requestType) => {

    switch (requestType) {
    case constants.GETACCOUNTS:
        return data.getData(apiKey, 'accounts');
    case constants.GETACCOUNTBALANCES:
        return data.getData(apiKey, 'accounts/balance');
    case constants.GETADDRESSES:
        return data.getData(apiKey, 'addresses');
    case constants.GETCONTACTS:
        return data.getData(apiKey, 'contacts');
    case constants.GETCONTACTBYID:
        return data.getData(apiKey, `contacts/${params.contactID}`);
    case constants.GETCONTACTACCOUNTS:
        return data.getData(apiKey, `contacts/${params.contactID}/accounts`);
    case constants.GETCONTACTACCOUNTSBYID:
        return data.getData(apiKey, `contacts/${params.contactID}/accounts/${params.contactAccountID}`);
    case constants.GETCUSTOMERS:
        return data.getData(apiKey, 'customers');
    case constants.GETDIRECTDEBITMANDATES:
        return data.getData(apiKey, 'direct-debit/mandates');
    case constants.GETDIRECTDEBITMANDATESBYUID:
        return data.getData(apiKey, `direct-debit/mandates/${params.mandateUID}`);
    case constants.GETME:
        return data.getData(apiKey, 'me');
    case constants.GETCARDS:
        return data.getData(apiKey, 'cards');
    default:
        return new Promise((ignore, reject) => {
            reject(requestType + ' is not a valid end point');
        });
    }


};
