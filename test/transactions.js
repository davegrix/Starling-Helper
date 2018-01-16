'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key, as well as amy parameters for tests
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Transactions', () => {
    it('Should retrieve an array of transactions for the day', (done) => {

        starling.getData('getTodaysTransactions')
            .then(transactions => {
                const sRes = JSON.parse(transactions);
                chai.expect(sRes._embedded.transactions).to.be.an('array');
                done();
            });
    });

    it('Should retrieve an array of transactions for the week ', (done) => {

        starling.getData('getWeeksTransactions')
            .then(transactions => {
                const sRes = JSON.parse(transactions);
                chai.expect(sRes._embedded.transactions).to.be.an('array');
                done();
            });
    });

    it('Should retrieve an array of transactions for the month ', (done) => {

        starling.getData('getMonthsTransactions')
            .then(transactions => {
                const sRes = JSON.parse(transactions);
                chai.expect(sRes._embedded.transactions).to.be.an('array');
                done();
            });
    });

    it('Should retrieve an array of transactions for the year ', (done) => {

        starling.getData('getYearsTransactions')
            .then(transactions => {
                const sRes = JSON.parse(transactions);
                chai.expect(sRes._embedded.transactions).to.be.an('array');
                done();
            });
    });

    it('Should retrieve an array of all transaction', (done) => {

        starling.getData('getAllTransactions')
            .then(transactions => {
                const sRes = JSON.parse(transactions);
                chai.expect(sRes._embedded.transactions).to.be.an('array');
                done();
            });
    });
});

