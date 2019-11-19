'use strict' 

function isEmpty(value){
    return typeof value === undefined || value === undefined || value === null || value === "";
}

function setBackgroundImage(image){
    if(image){
        document.querySelector("body").style.backgroundImage = "url(" + image + ")";
    }
}

function isiOS(){
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
} 

module.exports = {isEmpty, setBackgroundImage, isiOS}