// npm install jsdom 
// node first-processing-HTMLAllCollection.js --source="downlode.html"

// Browner get data in form of html css and js is comvert that data (parse) and convert it into dom 
// document objext model a tree like structure in which html is present 

// browser read html -> convert it to user friendly (view ) form & -> make dom

// we dont have browser so we use jsdom library for the same ( create dom for us to intract with the page)


// Note -> Browser work is to take data from server in form of html css js and make a dom for us 
// dom -> document is a tree of html elements 









const minimist = require('minimist');
const fs = require('fs');
const jsdom = require('jsdom'); //-> lode html and and create dom for us which help us to find information 

let args = minimist(process.argv);


fs.readFile(args.source, "utf-8", function (err, data) {
    // let JSDOM = jsdom.JSDOM; 
    // from jsdom we get JSDOM

    // let dom = new JSDOM(data);  
    // Create object of it // using this we can fetch our data

    let dom = new jsdom.JSDOM(data); // js dom library -> has a constructor JSDOM -> we give our data (HTMl to it) -> It make it to dom
    let document = dom.window.document; // from dom we want document -> document have all the information of the html

    console.log(document.title);

    let desc = document.querySelectorAll(" .match-info  div.description");
    // console.log(button.textContent); // text content give the inner html of the element
    console.log("All match information: ");
    for (let i = 0; i < desc.length; i++) {
        console.log(desc[i].textContent);
    }

    // As we know that query selector all is an array type selector -> so whatever div.discription class in the html it ferch it and print


    let result = document.querySelectorAll(".status-text span")

    console.log("All match results: ")

    for (let i = 0; i < result.length; i++) {
        console.log(result[i].textContent);
    }





})