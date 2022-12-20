// [2] - t 
// [3] - n

let args = process.argv;

let n = parseInt(args[2]);
let isPrime = false;

    for(let i=2; i*i<=n; i++){
        if(n%i==0){
            isPrime=true;
            break;
        }
    }


if(isPrime==true){
    console.log("Number is Not prime")
}else{
    console.log("Number is  prime");
}




