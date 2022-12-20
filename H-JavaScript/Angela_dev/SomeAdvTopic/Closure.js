// It is a function
// It preserve outer scope inside inner scope

// Lexical scope

let name = "Priyansh"

const greet = ()=>{
    let message = "Hello"
    return (`${name} ${message}`)
}

// message can only be use inside greet but name can be use anywhere in the programer
// In js everything have a scope

function greeting() {
    let message = 'Hi';

    function sayHi() {
        let name = "Priyansh"
        console.log(message + name);
    }

    sayHi();
}

greeting();

// sayHi have access ti message(global variabe) and its own variables

function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
hi(); // still can access the message variable

// Now instead call we retuen the function stored in hi variable and when we call hi same effect can be seen like first one

// when greeting function complete execution then message variable is no longer exist but sayHi is a closue and it preserve the message variable and this is the power of closure

// Closure function is the one who preserve outer scope in inner scope