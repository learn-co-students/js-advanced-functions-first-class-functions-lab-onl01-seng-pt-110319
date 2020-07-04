// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => [drivers[0], drivers[1]];

const returnLastTwoDrivers = (drivers) => [drivers[drivers.length - 2], drivers[drivers.length - 1]];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
    return (fare) => fare * multiplier;
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers (drivers, driverFunction) {
    return driverFunction(drivers);
}