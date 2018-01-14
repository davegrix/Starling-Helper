'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key, as well as amy parameters for tests
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Me Test', () => {
    it('Should return an array of scopes ', (done) => {

        starling.getData('getMe')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.scopes).to.be.an('array');
                done();
            })
            .catch(err => {
                console.log('getMe', err);
            });
    });
});

