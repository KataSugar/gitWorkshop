// Usage: node showLast.js

const getBeers = require('../data')

function getLastBeer() {
    // TODO: return the last beer object (use `getBeers` for the solution)
    console.log(getBeers().length)
    console.log(getBeers().length-1)
    return getBeers()[getBeers().length-1]
    
}

if (getLastBeer()?.name === "All the Leaves are Brown") {
    console.log("Success ✅");
} else {
    console.log("Not quite right");
}
