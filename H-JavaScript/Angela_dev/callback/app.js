// callback with parameters 
function firstAction(callback, message, anotherCallback) {
    console.log(message)
    setTimeout(callback, 1000);
    anotherCallback
}

function secondAction(message) {
    console.log(message)
}


setTimeout(() =>
    firstAction(() =>
        secondAction("hello janeman"), "I am a first function", message1),
    3000);


// classback
function message1() {
    console.log("hello")
    setTimeout(() =>
        message2(() =>
            message1), 4000)
}

function message2(callback) {
    console.log("ola chomo stach, kumo")

}

setTimeout(message1, 2000)

// callback take function as parameter
// argument function will take args and whenevr data we get it give it to callback function 

toggle = () => {
    // this is a callback function 
}

toggle() // this is a function being called