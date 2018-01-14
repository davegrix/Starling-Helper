'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Account Tests', () => {
    it('Should return an sort code of 608371 ', (done) => {

        starling.getData('getAccounts')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.sortCode === '608371');
                done();
            })
            .catch(err => {
                console.log('getAccounts', err);
            });
    });

    it('Should return a number for amount', (done) => {
        starling.getData('getAccountBalances')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.amount).to.be.a('number');
                done();
            })
            .catch(err => {
                console.log('getAccounts', err);
            });
    });
});

