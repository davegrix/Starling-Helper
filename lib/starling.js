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

    let todayDate;
    let fDate;

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
    case constants.TRANSACTIONSDAY:
        todayDate = new Date().toISOString().slice(0, 10);
        return data.getData(apiKey, `transactions?from=${todayDate}&to=${todayDate}`);
    case constants.TRANSACTIONSWEEK:
        const dayOfWeek = new Date().getDay();
        let daysSinceMonday;
        switch (dayOfWeek) {
        case 0:
            daysSinceMonday = 6;
            break;
        case 1:
            daysSinceMonday = 0;
            break;
        case 2:
            daysSinceMonday = 1;
            break;
        case 3:
            daysSinceMonday = 2;
            break;
        case 4:
            daysSinceMonday = 3;
            break;
        case 5:
            daysSinceMonday = 4;
            break;
        case 6:
            daysSinceMonday = 5;
            break;
        }
        todayDate = new Date().toISOString().slice(0, 10);
        fDate = new Date();
        fDate.setDate(fDate.getDate() - daysSinceMonday);
        fDate = fDate.toISOString().slice(0, 10);
        return data.getData(apiKey, `transactions?from=${fDate}&to=${todayDate}`);
    case constants.TRANSACTIONMONTH:
        todayDate = new Date().toISOString().slice(0, 10);
        let mDate = new Date().getMonth();
        mDate = mDate + 1;
        if (mDate < 10) {
            mDate = '0' + mDate;
        }
        fDate = `${new Date().getFullYear()}-${mDate}-01`;
        return data.getData(apiKey, `transactions?from=${fDate}&to=${todayDate}`);
    case constants.TRANSACTIONYEAR:
        todayDate = new Date().toISOString().slice(0, 10);
        const year = new Date().getFullYear();
        fDate = `${year}-01-01`;
        return data.getData(apiKey, `transactions?from=${fDate}&to=${todayDate}`);
    case constants.TRANSACTIONALL:
        return data.getData(apiKey, 'transactions');
        case constants.GETPAYMENTS:
            return data.getData(apiKey, 'payments/scheduled');


    default:
        return new Promise((ignore, reject) => {
            reject(requestType + ' is not a valid end point');
        });
    }


};
