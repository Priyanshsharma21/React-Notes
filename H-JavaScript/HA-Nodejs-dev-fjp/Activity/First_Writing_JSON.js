let minimist = require('minimist');
let fs = require('fs');

let args = minimist(process.argv);

let teams = [

    {
        name: "India",
        rank: 1,
        matches: [
            {
                vs: "South Africa",
                result : "Win"
            },
            {
                vs : "Australia",
                result : "Win"
            },
        ]
    },


    {
        name: "Australia",
        rank: 4,
        matches: [
            {
                vs: "West-Indias",
                result : "Win"
            },
            {
                vs : "India",
                result : "lose"
            },
        ]
    },


    {
        name: "England",
        rank: 3,
        matches: [
            {
                vs: "South Africa",
                result : "Win"
            },
            {
                vs : "Afganistan",
                result : "Win"
            },
        ]
    },

    {
        name: "New-Zeland",
        rank: 2,
        matches: [
            {
                vs: "Sri-Lanka",
                result : "Win"
            },
            {
                vs : "Bangladesh",
                result : "Win"
            },
        ]
    }

]

console.log(teams[1].matches[1].vs);
console.log(teams[2].matches[1].result);


let json = JSON.stringify(teams); // * Stringify converts JSO to JSON

fs.writeFile(args.dest, json, "utf-8", function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});