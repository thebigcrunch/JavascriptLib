"use strict";

const std = require("../std/index.js");
const date = require("../date/index.js");

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

function flipData(array) {
  return array[0].map((col, i) => array.map(row => row[i]));
}

function arrayContainsOnlyNumbers(array) {
  return !array.some(isNaN);
}

function parseNumbersInColumn(singleDimensionArray) {
  for (var i = 0; i < singleDimensionArray.length; i++) {
    if (!date.parseDate(singleDimensionArray[i])) {
      const numberFromLabelString = singleDimensionArray[i].replace(
        /[^\d\.]/g,
        ""
      );
      const valueAsNumber = parseFloat(numberFromLabelString);
      if (valueAsNumber && !isNaN(valueAsNumber)) {
        singleDimensionArray[i] = valueAsNumber;
      }
    }
  }
}

function getValidColumnData(singleDimensionArray) {
  let lastValidIndex = -1;
  for (var i = 0; i < singleDimensionArray.length; i++) {
    if (!std.isEmpty(singleDimensionArray[i])) {
      lastValidIndex = i;
    }
  }
  if (lastValidIndex === singleDimensionArray.length) {
    return singleDimensionArray;
  }
  return singleDimensionArray.slice(0, lastValidIndex + 1);
}

function generateErrorsForDataArray(array) {
  let errors = {};
  for (var i = 0; i < array.length; i++) {
    var dataPoint = array[i];
    if (isNaN(dataPoint)) {
      errors[i] = {
        message: "Not a number"
      };
    }
  }
  return errors;
}

module.exports = {
  getValidRowsFromArray,
  getColumnFromArray,
  getMaxValueFromArray,
  getMinValueFromArray,
  getNumbersBetweenMinMaxValues,
  getNumbersByStepBetweenMinMaxValues,
  flipData,
  arrayContainsOnlyNumbers,
  parseNumbersInColumn,
  getValidColumnData,
  generateErrorsForDataArray
};
