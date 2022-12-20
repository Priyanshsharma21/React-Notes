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
const { getSystemErrorMap } = require('util');
    
    let args = minimist(process.argv);


    // task1 --> Read file(disk)

let date1 = Date.now(); // Tell us time
console.log("Starting task1 at: "+ date1 % 100000);

// task1 -> Read file 

// let data = fs.readFileSync(args.source, "utf-8"); // serial // this after reading give value to data


 // doing work parally // this after reading give value to function inside it

fs.readFile(args.source, function(err,data){ // * In this read file and give the value to thefunction till completing next task // hence fast
   
    if(err==null){
        let date2 = Date.now(); 
console.log("Finishing task1 at: "+ date2 % 100000);

let diff1 = (date2-date1);
console.log(diff1);
    }

    else{
        console.log("Error happened");
    }
    
    
})

fs.readFile(args.source, (err,data)=>{
    if(err==null){
        let date2 = Date.now(); 
console.log("Finishing task1 at: "+ date2 % 100000);

let diff1 = (date2-date1);
console.log(diff1);
    }

    else{
        console.log("Error happened");
    }
})

// task2 (Calculate prime)

let date3 = Date.now();
console.log("Starting task at: "+date3%100000);

// calculate prime 
let arr=[];

for(let i=2; i<=args.n; i++){
    let isPrime = IsPrime(i);
    if(isPrime==true){
        arr.push(i);
    }
}


let date4 = Date.now(); 
console.log("Finishing task1 at: "+ date4 % 100000);

let diff2 = (date4-date3);
console.log("Difference in task2 is: "+diff2);

let total_diff_till_task2 = (date4-date1);
console.log("Total difference till task2: "+total_diff_till_task2);


// Note -> What just happen 
// the callback function tells that you started task1 now moving to task2
// task 2 completed first then 1 completed , this lead to less time