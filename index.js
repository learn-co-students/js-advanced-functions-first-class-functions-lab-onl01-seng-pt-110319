// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {

    let test = drivers.slice(0,2);
    return test;
}

const returnLastTwoDrivers = function (drivers) {

    let result = drivers.slice(2, 4)
    console.log(result)
    return result
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
    return function inner(fare) {
        return fare * integer
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arg1, arg2) {

    return arg2(arg1)



}