"use strict";
/* 
const accounting = require("https://cdnjs.cloudflare.com/ajax/libs/accounting.js/0.4.1/accounting.min.js");

function getNumberFromString(inputValue) {
  return accounting.unformat(inputValue);
} */

function isNumberToBeFormatted(inputData) {
    let maxValue = Math.max(...inputData);
    return maxValue > 9999;
}

module.exports = { isNumberToBeFormatted };
