'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key, as well as amy parameters for tests
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Contact Tests', () => {
    it('Should return an array of contacts ', (done) => {
        starling.getData('getContacts')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes._embedded.contacts).to.be.a('array');
                done();
            })
            .catch(err => {
                console.log('getContacts', err);
            });
    });

    it('Should return the account id sent', (done) => {

        const obj = {};
        obj.contactID = key.contactID;
        starling.params(obj);
        starling.getData('getContactByID')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.assert(sRes.id === key.contactID);
                done();
            })
            .catch(err => {
                console.log('getContactByID', err);
            });

    })

});

