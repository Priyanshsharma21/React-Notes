let args = process.argv;
let n = parseInt(args[2]); // 5 -> size of array // 10,20,30,40,50

// array 

let arr = [];

for(let i=0 ; i<n; i++){
    let value = parseInt(args[i+3]); // Because element started from 2 index
    arr.push(value);
    // arr[i] = val; //* We can do this also
}

for(let i=0; i<=arr.length; i++){
    console.log(arr[i]);
}
console.log(arr);

// for(let res in arr){
//     console.log(res);
// }
