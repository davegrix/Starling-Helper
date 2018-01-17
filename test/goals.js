'use strict';

// Add a file called testparams.js to this folder and export a constant call apiKey with your api key, as well as amy parameters for tests
const chai = require('chai');
const key = require('./testparams');
const starling = require('../lib/starling');

starling.init(key.apiKey);


describe('Saving Goals', () => {
    it('Should return an array of savingGoalList ', (done) => {

        const obj = {};
        obj.savingGoalID = key.savingsGoalID;
        starling.params(obj);
        starling.getData('getAllSavingGoals')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.savingsGoalList).to.be.an('array');
                done();
            })
            .catch(err => {
                console.log('getAllSavingGoals', err);
            });
    });


    it('Should return an object ', (done) => {

        const obj = {};
        obj.savingsGoalID = key.savingsGoalID;
        starling.params(obj);
        starling.getData('getGoalByID')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes).to.be.an('object');
                done();
            })
            .catch(err => {
                console.log('getGoalByID', err);
            });
    });

    it('Should return an non empty transferID ', (done) => {

        const obj = {};
        obj.savingsGoalID = key.savingsGoalID;
        starling.params(obj);
        starling.getData('getGoalsRecurringTransfers')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.transferUid.length > 0);
                done();
            })
            .catch(err => {
                console.log('getGoalsRecurringTransfers', err);
            });
    });

    it('Should return an imageString ', (done) => {

        const obj = {};
        obj.savingsGoalID = key.savingsGoalID;
        starling.params(obj);
        starling.getData('getGoalPhoto')
            .then(result => {
                const sRes = JSON.parse(result);
                chai.expect(sRes.base64EncodedPhoto.length > 0);
                done();
            })
            .catch(err => {
                console.log('getGoalsRecurringTransfers', err);
            });
    });

});

