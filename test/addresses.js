'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key, as well as amy parameters for tests
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Address Tests', () => {
    it('Should return a current address ', (done) => {

        starling.getData('getAddresses')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.current.streetAddress.length > 0);
                done();
            })
            .catch(err => {
                console.log('getAddresses', err);
            });
    });
});

