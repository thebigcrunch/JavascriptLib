"use strict";

const std = require("../std/index.js");

function getValidRowsFromArray(inputArray, columnIndex = 0) {
  return inputArray.map(function(row) {
    if (!std.isEmpty(row[columnIndex])) {
      return row;
    }
  });
}

function getColumnFromArray(inputArray, columnIndex) {
  return inputArray.map(function(row) {
    return row[columnIndex];
  });
}

module.exports = { getValidRowsFromArray, getColumnFromArray };
