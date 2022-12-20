// No callback 

// t1-> read a file - disk
// t2 -> Calculate prime Number
// t3 -> write a file 
// t4 -> Squre of prime 

// run -> node ncb.js --source=f1.txt --dest=f2.txt --n=50000 // read from source write in dest calculate sqiure of number till 50000


// code 
function IsPrime(x){
let isprime = true;
    for(let div=2; div*div<=x-1; div++){
        if(x%div==0){
           isprime = false;
           break;
        }
    }
    return isprime;
}

const minimist = require('minimist');
const fs = require('fs');

let args = minimist(process.argv);

//* task1 --> Read file(disk)

let date1 = Date.now(); // Tell us time in ms scince 1 jan 1970
console.log("Starting task1 at: "+ date1 % 100000);

let stext = fs.readFileSync(args.source, "utf-8"); // Task1 // * Is this when the task is complete of red it give data to stext and then next process will took place // hence slow
//* in this programe is waiting 

let date2 = Date.now(); // Tell us time
console.log("Finishing task1 at: "+ date2 % 100000);

let diff1 = (date2-date1);
console.log(diff1);


// *task2 (Calculate prime)

let date3 = Date.now();
console.log("Starting task at: "+date3%100000);

// calculate prime 
let arr=[];

for(let i=2; i<=args.n; i++){
    if(IsPrime(i)==true){
        arr.push(i);
    }
}





let date4 = Date.now(); 
console.log("Finishing task1 at: "+ date4 % 100000);

let diff2 = (date4-date3);
console.log("Difference in task2 is: "+diff2);

let total_diff_till_task2 = (date4-date1);
console.log("Total difference till task2: "+total_diff_till_task2);

