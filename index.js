const returnFirstTwoDrivers = function(drivers) {
  let firstDrivers = [drivers[0], drivers[1]];
  return firstDrivers;
};

const returnLastTwoDrivers = function(drivers) {
  let lastDrivers = drivers.slice(-2);
  return lastDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driverFunctions) {
  return driverFunctions(drivers);
};