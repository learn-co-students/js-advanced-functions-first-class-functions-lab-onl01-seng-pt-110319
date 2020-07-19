// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers= function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers= function(drivers){
    return drivers.slice(-2);
}


const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function(factor){
        return fare*factor
    }
}
const fareDoubler= createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);

function selectDifferentDrivers(drivers,funct){
    return funct(drivers);
}

console.log(selectingDrivers);
