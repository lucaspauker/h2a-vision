"use strict";
/*
 *  Defined the Mongoose Schema and return a Model for a User
 */
/* jshint node: true */

var mongoose = require('mongoose');

var whiteboardSchema = new mongoose.Schema({
  date_time: {type: Date, default: Date.now},
  x: Number,
  y: Number,
  w: Number,
  h: Number,
  points: [[Number]],
});

var roomSchema = new mongoose.Schema({
  date_time: {type: Date, default: Date.now},
  room_id: String,
  whiteboards: [whiteboardSchema],
});

var Room = mongoose.model('Room', roomSchema);

module.exports = Room;
