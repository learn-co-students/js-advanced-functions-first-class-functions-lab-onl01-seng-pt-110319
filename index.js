// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multi) {
    return function fareCalculator(rate) {
      return rate*multi;
    };
};

let fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(drivers,fn) {
  return fn(drivers);
}
