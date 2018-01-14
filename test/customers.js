'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key, as well as amy parameters for tests
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Customer Tests', () => {
    it('Should return an accountHolderType of INDIVIDUAL ', (done) => {

        starling.getData('getCustomers')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.accountHolderType === 'INDIVIDUAL');
                done();
            })
            .catch(err => {
                console.log('getCustomers', err);
            });
    });
});

