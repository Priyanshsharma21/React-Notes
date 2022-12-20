let args = process.argv;
let n = parseInt(args[2]);

for(let i=2; i<=n; i++){
    let result = IsPrime(i);
    if(result==true){
        console.log(i + " is a Prime");
    }
}






function IsPrime(x) {
    let isPrime = true;

    for(let i=2; i*i<=x; i++){
        if(x%i==0){
            isPrime=false;
            break;
        }
    }

    return isPrime;
}