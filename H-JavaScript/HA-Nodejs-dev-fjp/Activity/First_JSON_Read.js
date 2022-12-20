// node First_JSON_Read.js --source=teams.js 

const minimist = require("minimist")
const fs = require('fs');

let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function (err, json) {
    if (err) {
        console.log(err);
    }
    else{
        //! console.log(json); // ! we cant change in this file // for change parse it // convert json to jso

        let teams = JSON.parse(json);
        console.log(teams[2].matches[1].vs);

    }
});