// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
	let newDriverArray = []
	newDriverArray.push(drivers[0],drivers[1])
	return newDriverArray
}

function returnLastTwoDrivers(drivers) {
	let newDriverArray = drivers.slice(drivers.length-2)
	return newDriverArray
}

function selectingDrivers() {
  let driverArray = [returnFirstTwoDrivers,returnLastTwoDrivers];
  return driverArray
}
