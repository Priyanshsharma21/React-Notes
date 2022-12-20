// Run ->

// node Create_BigFile.js --dest==big.data



const minimist = require('minimist');
const fs = require('fs');

let args = minimist(process.argv);
console.log(args.dest);

//                                     Array 
let arr = [];
//                                    Push element in array

for(let i=0; i<=50000000; i++){
    arr.push(i);
}
//                               Join in next line -> String format
let str = arr.join("\n");

console.log(str);

//Write inside dest file in text format from sacrach
fs.writeFileSync(args.dest, str, "utf-8"); 
// In append it add data at last
fs.appendFileSync(args.dest,str,"utf-8"); 
fs.appendFileSync(args.dest,str,"utf-8"); 
fs.appendFileSync(args.dest,str,"utf-8"); 
fs.appendFileSync(args.dest,str,"utf-8"); 
fs.appendFileSync(args.dest,str,"utf-8"); 

