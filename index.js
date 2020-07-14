// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
	let newDriverArray = []
	newDriverArray.push(drivers[0],drivers[1])
	return newDriverArray
};

function returnLastTwoDrivers(drivers) {
	let newDriverArray = drivers.slice(drivers.length-2)
	return newDriverArray
};

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(amount) {
	function fareQuintupler(amount) {
		return amount*5
	}
	return fareQuintupler
};

function fareDoubler(amount) {
	return amount*2
};

function fareTripler(amount) {
	return amount*3
};

function selectDifferentDrivers(drivers, inputFunction) {
	if(inputFunction == returnFirstTwoDrivers) {
		return returnFirstTwoDrivers(drivers)
	}
	else {
		return returnLastTwoDrivers(drivers)
	}
}