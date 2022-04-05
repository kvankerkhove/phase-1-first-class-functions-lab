const returnFirstTwoDrivers = function (drivers) {
    const firstDrivers = [];
    firstDrivers.push(drivers[0], drivers[1]);
    return firstDrivers;
}

const drivers = ['Antonia', 'Nuru']

const returnLastTwoDrivers = function (secondDrivers) {
    return secondDrivers.slice(-2);
}

const secondDrivers = ['Amari', 'Mo'];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function (fare) {
       return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers);
}
