'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key, as well as amy parameters for tests
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Rejection', () => {
    it('Should fail ', (done) => {

        starling.getData('getAllTheMoney')
            .catch(err => {
                let check = 'is not valid';
                chai.expect(err.includes(check));
                done();
            });
    });
});

