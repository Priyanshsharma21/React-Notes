// Async await make promise easy to write 
// async -> mke function return promise 
// await make function wait for the promise
// In async function we use await to error handel use try,catch block 
// when use await it make our responce resolve there only 
// Just like promise but make easy to write promises 

isIngPresent = true

function giveMeCoffee() {
    return new Promise((res, rej) => {
        if (isIngPresent) {
            res("This is your coffee")
        } else {
            rej("Sorry no coffee")
        }
    })
}

(async function copyChayea() {
    try {
        let message = await giveMeCoffee()
        console.log(message)
    } catch (error) {
        console.log(error)
    }
})()