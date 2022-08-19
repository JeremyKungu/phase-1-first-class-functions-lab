// Code your solution in this file!
const drivers = ["Max", "Lewis", "Charles", "Sergio", "Seb"];

const returnFirstTwoDrivers = function(driver) {   
    return driver.slice(0,2);
}

returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(driver) {
    return driver.slice(-2);
}

returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(array, drivers) {
    return drivers(array)
}


