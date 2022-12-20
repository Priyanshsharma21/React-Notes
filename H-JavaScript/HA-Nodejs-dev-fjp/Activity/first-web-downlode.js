// npm install axious 
// node first_Web_Downlode.js --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results"  --dest="Downlode.html"

const axios = require('axios');
const minimist = require('minimist');
const fs = require('fs');

let args = minimist(process.argv);


let downlodePromise = axios.get(args.url); // axios Promise to give url to variable downlodePromise // downlode karo

// downlodePromise.then().catch();  // if downlode then -> then function call otherwise carch call

downlodePromise.then(function (res) { // if get url then response else occure // jab downlode ka promise pura hoga tab function call karna aur res dega 

    let html = res.data; 
    // is a object // responce is present in data
    // console.log(data);
    fs.writeFileSync(args.dest, html, "utf-8");

}).catch(function (err) {
    console.log(err); // if error comes then print error
})