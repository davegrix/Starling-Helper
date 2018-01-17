'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key, as well as amy parameters for tests
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Merchant Tests', () => {
    it('Should return the merchantID sent ', (done) => {

        const obj = {};
        obj.merchantID = key.merchantID;
        starling.params(obj);
        starling.getData('getMerchant')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.merchantUid === key.merchantID);
                done();
            })
            .catch(err => {
                console.log('getDirectDebitMandates', err);
            });
    });


    it('Should return the UID sent ', (done) => {

        const obj = {};
        obj.merchantID = key.merchantID;
        obj.merchantLocationID = key.merchantLocationID;
        starling.params(obj);
        starling.getData('getMerchantLocation')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.merchantLocationUid === key.merchantLocationID);
                done();
            })
            .catch(err => {
                console.log('getDirectDebitMandatesByUID', err);
            });
    });


});

