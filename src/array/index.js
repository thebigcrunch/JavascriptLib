'use strict'

var tbc_lib_std = require('tbc_lib_std.js');

function getValidRowsFromArray(inputArray, columnIndex=0){
    let result = [];
    for(let i=0;i<inputArray.length;i++){
        if(!tbc_lib_std.isEmpty(inputArray[i][columnIndex])){
            result.push(inputArray[i]);
        }
    }
    return result;
}

function getColumnFromArray(inputArray,columnIndex){
    let result = [];
    for(let i=0;i<inputArray.length;i++){
        result.push(inputArray[i][columnIndex]);
    }
    return result;
}

module.exports = {getValidRowsFromArray, getColumnFromArray}