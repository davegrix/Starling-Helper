'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key, as well as amy parameters for tests
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Direct Debit Mandates Tests', () => {
    it('Should return an array of mandates or an empty object ', (done) => {

        starling.getData('getDirectDebitMandates')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes._embedded.mandates).to.be.an('array');
                done();
            })
            .catch(err => {
                console.log('getDirectDebitMandates', err);
            });
    });


    it('Should return the UID sent ', (done) => {

        const obj = {};
        obj.mandateUID = key.mandateUID;
        starling.params(obj);
        starling.getData('getDirectDebitMandatesByUID')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.uid === key.mandateUID);
                done();
            })
            .catch(err => {
                console.log('getDirectDebitMandatesByUID', err);
            });
    });


});

