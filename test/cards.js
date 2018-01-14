'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key, as well as amy parameters for tests
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Card Tests', () => {
    it('card type should be ContactlessDebitMastercard', (done) => {

        starling.getData('getCards')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.type === 'ContactlessDebitMastercard');
                done();
            })
            .catch(err => {
                console.log('getCards', err);
            });
    });
});

