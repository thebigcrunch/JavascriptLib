"use strict";

function isEmpty(value) {
  return (
    typeof value === undefined ||
    value === undefined ||
    value === null ||
    value === ""
  );
}

function isiOS() {
  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
}

module.exports = { isEmpty, isiOS };
