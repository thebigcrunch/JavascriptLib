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

function getMaxValueFromArray(inputArray, columnIndex = 0) {
  return Math.max(
    ...inputArray.map(function(row) {
      return row[columnIndex];
    })
  );
}

function getMinValueFromArray(inputArray, columnIndex = 0) {
  return Math.min(
    ...inputArray.map(function(row) {
      return row[columnIndex];
    })
  );
}

function getNumbersBetweenMinMaxValues(minValue, maxValue) {
  let result = [];
  for (let i = minValue; i <= maxValue; i++) {
    result.push(i);
  }
  return result;
}

function getNumbersByStepBetweenMinMaxValues(minValue, maxValue, step) {
  let result = [];
  let stepFactor = maxValue / step;
  for (let i = minValue; i <= step; i++) {
    result.push(i * stepFactor);
  }
  return result;
}

module.exports = {
  getValidRowsFromArray,
  getColumnFromArray,
  getMaxValueFromArray,
  getMinValueFromArray,
  getNumbersBetweenMinMaxValues,
  getNumbersByStepBetweenMinMaxValues
};
