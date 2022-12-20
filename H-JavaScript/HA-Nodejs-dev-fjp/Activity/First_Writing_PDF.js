// npm install pdf-lib 
// node First_Writing_PDF.js --source=teams.js --dest=root

let minimist = require('minimist');
let fs = require('fs');
let path = require('path');
let pdf = require('pdf-lib');
const {
    match
} = require('assert');
const {
    PDFDocument
} = require('pdf-lib');

let args = minimist(process.argv);

let teamJson = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamJson);

for (let i = 0; i < teams.length; i++) {
    let folderName = path.join(args.dest, teams[i].name); //! Create folder first mkkdir then make floder inside

    //! This is how we name folder 
    // let folderName = path.join(args.dest,teams[i].name);
    // fs.mkdirSync(folderName);

    for (let j = 0; j < teams[i].matches.length; j++) {
        let fileName = path.join(folderName, teams[i].matches[j].vs + ".pdf");
        createScoreCard(teams[i].name, teams[i].matches[j], fileName);


        // !Inside the pdf we have to pass 3 parameters team1,team2,result
    }
}

// * This function will create file name in folder

function createScoreCard(team, matches, matchFileName) {


    let t1 = team;
    let t2 = matches.vs;
    let result = t1 + " " + matches.result;

    // let PDFDocument = pdf.PDFDocument();
    // reading the template pdf file


    // template file come in form of bytes not in utf-8

    let orignalBytes = fs.readFileSync("Template.pdf");

    // pdf has PDFDocument property and it have lode method  tht and pass file template , which gave us promise to complete it


    let promiseToLoadBytes = pdf.PDFDocument.load(orignalBytes);

    // when the file loded give it to pdfdoc

    promiseToLoadBytes.then(function (pdfdoc) {

        // get the first page 

        let page = pdfdoc.getPage(0);

        page.drawText(t1, {
            x : 335,
            y:590,
            size : 30,

        });

        page.drawText(t2, {

            x : 335,
            y:490,
            size : 30,


        });
        page.drawText(result, {
            x : 335,
            y:  410,
            size : 30,

        });

        let promiseToSave = pdfdoc.save(); // promise to save
        promiseToSave.then(function (changedBytes) { // when save give it to changes bytes
            fs.writeFileSync(matchFileName, changedBytes); // write it in pdf
        })

//! Note :- all the instructon is done in RAM  so we have tp save it so it will be store in HHD

    })



}