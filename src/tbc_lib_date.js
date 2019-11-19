'use strict'

function parseDate(inputDate){
    let date = new Date(inputDate);
    if(isValidDate(date)){
        return date;
    }else{
        return null;
    }
}

//https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
function isValidDate(d) {
     return d instanceof Date && !isNaN(d);
}

module.exports = {parseDate}