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
  const unit = getUnit(unitString);
  if (isNaN(label)) {
    return label;
  } else {
    return unit.prefix + label.toLocaleString("en-US") + " " + unit.suffix;
  }
}

function getAxisTickLabels(data) {
  const labels = data.ticks;
  const numberOfDataPoints = Math.floor(labels.length / 20);
  const maxChars = window.innerWidth > 450 ? 30 : 15;
  labels.forEach(function(label, i) {
    if (labels.length > 25) {
      if (i % numberOfDataPoints !== 1) {
        labels[i] = "";
      }
    }
    if (labels[i].length > maxChars) {
      labels[i] = labels[i].substr(0, maxChars - 3) + "...";
    }
  });
}

module.exports = { getUnit, formatLabel, getAxisTickLabels };
