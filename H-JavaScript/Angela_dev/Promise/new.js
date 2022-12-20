let milkInFridge = false;

function giveMeSomeMilk() {
    return new Promise((resolve, reject) => {

        if(!milkInFridge){
            reject("Milk is not in fridge, so get your ass of the coutch and get it from superMarket")
        }else{
            resolve("Ok, Take it")
        }
    })
}

giveMeSomeMilk().then((message)=>{
    console.log("I complete your promise "+message)
}).catch((errorMessage)=>{
    console.log("Sorry "+errorMessage)
})

// Promise save us from callback hell -> nested callback make code more complex