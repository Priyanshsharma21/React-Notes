function print(sum){
    console.log(sum)
}

function addition(a,b,callback){
    let c = a + b;
    callback(c);
}

addition(3,4,print)