let minimist = require('minimist');
let args = minimist(process.argv);

let count = args.n;
let time = args.d;
// cid use to stop the timer
let cid = setInterval(() => {
    console.log(count + " to go...");
    count--;

    if(count == 0){
        console.log("Go GO GO.......");
        clearInterval(cid);
    }

}, 1000);