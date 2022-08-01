/* jshint node: true */

/*
 * This Node.js program loads the CS142 Project #5 model data into Mongoose defined objects
 * in a MongoDB database. It can be run with the command:
 *     node loadDatabase.js
 * be sure to have an instance of the MongoDB running on the localhost.
 *
 * This script loads the data into the MongoDB database named 'cs142project6'.  In loads
 * into collections named User and Photos. The Comments are added in the Photos of the
 * comments. Any previous objects in those collections is discarded.
 *
 * NOTE: This scripts uses Promise abstraction for handling the async calls to
 * the database. We are not teaching Promises in CS142 so strongly suggest you don't
 * use them in your solution.
 *
 */

const fs = require('fs');

// We use the Mongoose to define the schema stored in MongoDB.
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://127.0.0.1/company_navigator', { useNewUrlParser: true, useUnifiedTopology: true });

// Load the Mongoose schema for Company
var Company = require('./schema/company.js');

// We start by removing anything that existing in the collections.
var removePromises = [Company.deleteMany({})];

const readFile = require('util').promisify(fs.readFile);

Promise.all(removePromises).then(function () {
    var models = [];
    const contents = fs.readFileSync('./data/whd_h2a.csv', 'utf-8');
    const arr = contents.split(/\r?\n/);
    let getN = function (s, ind) {
      let elem = s.split('"')[(ind + 1) * 2 + 1];
      return elem;
    };
    for (let i=1; i < arr.length - 1; i++) {
      const caseID = parseInt(getN(arr[i], 0));
      const name = getN(arr[i], 1);
      const address = getN(arr[i], 3);
      const city = getN(arr[i], 4);
      const state = getN(arr[i], 5);
      const job = getN(arr[i], 8);
      const h2aViolations = parseInt(getN(arr[i], 45));
      const h2aBW = getN(arr[i], 46);
      const h2aEE = parseInt(getN(arr[i], 47));
      const startDate = getN(arr[i], 14);
      const endDate = getN(arr[i], 15);
      models.push({
        caseID: caseID,
        name: name,
        address: address,
        city: city,
        state: state,
        job: job,
        h2aViolations: h2aViolations,
        h2aBW: h2aBW,
        h2aEE: h2aEE,
        startDate: startDate,
        endDate: endDate
      });
    }
    //var models = [
    //  {name: 'Foobar', city: 'Houston', state: 'TX', job: 'Farmworker'},
    //  {name: 'Foo', city: 'Austin', state: 'TX', job: 'tate Generation and Distribution of Electric Power'},
    //  {name: 'Foobar', city: 'Chicago', state: 'IL', job: 'Retail Bakeries'},
    //  {name: 'a Farm', city: 'Houston', state: 'TX', job: 'Retail Bakeries'},
    //  {name: 'another Farm', city: 'Austin', state: 'TX', job: 'Retail Bakeries'},
    //  {name: 'Really long named farm', city: 'Chicago', state: 'IL', job: 'Retail Bakeries'},
    //  {name: 'SLKJD', city: 'Chicago', state: 'IL', job: 'Retail Bakeries'},
    //]
    var mapFakeId2RealId = {};
    var companyPromises = models.map(function (c) {
        return Company.create({
            caseID: c.caseID,
            name: c.name,
            address: c.address,
            city: c.city,
            state: c.state,
            job: c.job,
            h2aViolations: c.h2aViolations,
            h2aBW: c.h2aBW,
            h2aEE: c.h2aEE,
            startDate: c.startDate,
            endDate: c.endDate,
        }).then(function (obj) {
            obj.save();
        }).catch(function(err){
            console.error('Error create user', err);
        });
    });

    Promise.all(companyPromises).then(function () {
        //mongoose.disconnect();
    });

}).catch(function(err){
    console.error('Error create schemaInfo', err);
});
