"use strict";

const UNIT_POSITION = {
  prefix: ["$", "€", "£", "¥", "₹", "฿"],
  suffix: [
    "%",
    "USD",
    "JPY",
    "EUR",
    "GBP",
    "INR",
    "MB",
    "GB",
    "TB",
    "m",
    "cm",
    "km",
    "ha",
    "sec",
    "min",
    "hr"
  ],
  date: ["MM/DD/YYYY", "YYYY"]
};

function getUnit(unit) {
  let returnValue = { suffix: "", prefix: "" };
  if (UNIT_POSITION.suffix.indexOf(unit) >= 0) {
    returnValue.suffix = unit;
  } else if (unit !== "Just Numbers") {
    returnValue.prefix = unit;
  }
  return returnValue;
}

function formatLabel(label, unitString) {
  let unit = getUnit(unitString);
  if (isNaN(label)) {
    return label;
  } else {
    return unit.prefix + label.toLocaleString("en-US") + " " + unit.suffix;
  }
}

module.exports = { getUnit, formatLabel };
