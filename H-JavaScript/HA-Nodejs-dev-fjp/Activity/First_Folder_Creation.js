// node First_Folder_Creation.js --source=teams.js --dest=root 


let minimist = require('minimist');
let fs = require('fs');
let path = require('path'); // use to add slash according to appropiate machine

let args = minimist(process.argv);

let teamJson = fs.readFileSync(args.source,"utf-8");
let teams = JSON.parse(teamJson);

for(let i=0; i<teams.length; i++){
    let folderName = path.join(args.dest,teams[i].name);
    // fs.mkdirSync(args.dest + "/" + teams[i].name);
    fs.mkdirSync(folderName);
}