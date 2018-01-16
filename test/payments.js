'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key, as well as amy parameters for tests
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Payments', () => {
    it('Should retrieve an array of payment schedules', (done) => {

        starling.getData('getPaymentSchedule')
            .then(payments => {
                const sRes = JSON.parse(payments);
                chai.expect(sRes._embedded.paymentOrders).to.be.an('array');
                done();
            });
    });
});

