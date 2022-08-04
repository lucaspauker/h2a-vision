"use strict";
/*
 *  Defined the Mongoose Schema and return a Model for a User
 */
/* jshint node: true */

var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
  timestamp: {type: Date, default: Date.now},
  caseID: Number,
  name: String,
  address: String,
  city: String,
  state: String,
  job: String,
  h2aViolations: Number,
  h2aBW: String,
  h2aEE: Number,
  h2aCMP: String,
  startDate: String,
  endDate: String,
});

var Company = mongoose.model('Company', companySchema);

module.exports = Company;
