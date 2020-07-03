const returnFirstTwoDrivers = function(arr){
    return [arr[0], arr[1]];
}
const returnLastTwoDrivers = function(arr){
    return [arr[arr.length-2], arr[arr.length-1]];
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int){
    return function(fare){
        return fare * int;
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers =  function(arr,func){
    return func(arr)
}