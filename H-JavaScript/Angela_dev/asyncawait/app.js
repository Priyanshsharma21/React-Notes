// Sync code -> Code which will executed from top to bottom one at a time ultil reach bottom -> execution in same order
// Async code -> run top to bottom but if any function takes timne it will execute that function and other code at same time-> can be in different oreder

const { useCallback } = require("react/cjs/react.production.min");

let a = 10;
let b = 20;

setTimeout(() => {
    console.log("async code")// this comes first but executed at last because async in natuee
}, 100);

// note -> code that takes useCallback(function as args) is mostly  async 

console.log(a)
console.log(b)
console.log("Sync code")

// Promises readFile and many functions are async 