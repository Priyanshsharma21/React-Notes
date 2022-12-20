// npm install minimist;

const fs = require('fs');
const minimist = require('minimist');

let args = minimist(process.argv);

// node File_System.js --source=File1.txt --dest=Flie2.txt;

let sfile = args.source; // File1.txt

let stext = fs.readFileSync(sfile,"utf-8");
// ------------------------------------------------------------
// let words = stext.split(" "); // String has split
// for(let i=0; i<words.length; i++){
//     words[i] = words[i].toUpperCase();
// }

// let dtext = words.join(" "); //Array has join
// ------------------------------------------------------------

let dtext = stext.toUpperCase();
let dfile  = args.dest; // File2.txt

fs.writeFileSync(dfile,dtext, "utf-8"); // Utf is in string format


