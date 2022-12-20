// Function running in parrelles of other funciton is async
// A complete function is passed as args in callback we know that
// ex -> settimeour and setInterval in which if two funcitons then both run parally 
// and when  the time is over the perform there functionallity 

// function greet(){
//     console.log("Hi, I am priyansh sharma")
// }

// setTimeout(greet,3000)

// Set interval 

function clock(){
    let d = new Date();
    document.querySelector(".clock").innerHTML = 
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() +":"+d.getMilliseconds()
}

setInterval(clock,100)