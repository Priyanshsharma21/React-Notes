// Promise 
// "Producing code" is code that can take some time (cook in hotel)

// "Consuming code" is code that must wait for the result (Customer)

// A Promise is a JavaScript object that links producing code and consuming code (token)

// Went to starbukes where we request for coffee 
// they gave us token this token is promise 
// we wait for coffee to come 
// cook make coffee 
// If ingredient not there they reject our request 
// If there then they gave us coffee 

// " I promise to loose 10 kgs in 3 months" -> promise 
// either this promise will resolved  to rejected
// Promises is useful when you are doing any task which you know take time like downlode movie or images and if any error happens we can cache it ion cache block

// 1. 
let promiseMe = new Promise((resolve,reject)=>{
    let a = 2 + 2
    
    if(a==4){
        resolve("Success")
    }else{
        reject("Fail")
    }
})

// 2.

promiseMe.then((message)=>{
console.log("This is inside then" + message)
}).catch((message)=>{
    console.log("This is inside cache" + message)
})
