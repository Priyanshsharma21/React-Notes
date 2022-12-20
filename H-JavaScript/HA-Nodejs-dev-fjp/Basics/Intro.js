let args = process.argv; // input -> Process.argv take input and store it in args as array
// At 0-> We have node 
// At 1 -> We have File,js 
// At 2 -> No we have input from here 

console.log(args); // output

let i = args[2]; // let 10
console.log(typeof i); // String type
i = i + 30; // 1030
console.log(i);

// if you give input like this -> Node intro.js 10 20 30 "Abcdef" // then this abc def will come in same line
// We can use hyper also 

console.log(typeof i); // the value that we pass in terminal is of type string to convert it to integer we use parseInt

let  j = parseInt(args[3], 10); // now this string is in number
console.log(j); // 200
console.log(typeof j); // number
j = j + 30; // 230
console.log(`Value of  is: `+j)


// Note if you use  " for next line \n use backlash"
// we can use `backlash
// for the same`
// let var1 = 200;
// let str = `half of ${var1} is ${var1/2}`;

// variable ->
// 1. var is local
// 2. let is block scope
// 3. const is constant 