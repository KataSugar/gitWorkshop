// Usage: node tasks.js

//-------------------------------------------------------------------------
// Task 1: getTargetBeer() should return the `name` of the first beer.
// Task 2: getTargetBeer() should return the `brewery` of the first beer.
//-------------------------------------------------------------------------

const getBeers = require('../data')

function getTargetBeer(key) {
    return getBeers()[0][key];
}

console.log(getTargetBeer('name'));
console.log(getTargetBeer('brewery'));
