'use strict'

function setBackgroundImage(image){
    if(image){
        document.querySelector("body").style.backgroundImage = "url(" + image + ")";
    }
}

module.exports = {setBackgroundImage}