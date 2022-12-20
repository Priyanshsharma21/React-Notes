// When we want to make multiple object of some type then we use constructor function

// Rules
// 1. Start with Capital
// 2. Call with new keyword

function Person(fName, lName){
    this.fName = fName;
    this.lName = lName;
}

let person1 = new Person("Priyansh", "Sharma")

// What new do
// 1. Create a empty object and asign it to this variable
// 2. Assign "Priyansh" and "Sharma" to fName and lName value
// 3. Return this

function Person(firstName, lastName) {
    // this = {};

    // add properties to this
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };

    // let this = {
        // fName = "Priyansh",
        // lName = "Sharma"
    // }

    // return this;
}


// When we make a instance of a object it have duplicate methods
// Prototype make this problem solve and make all the instance share same method

// If we call Person directly without new then this will not create and hence the value will not get bind


// we can use new.target to check if user use new to call the function


function Person(firstName, lastName) {
    if (!new.target) {
        throw Error("Cannot be called without the new keyword");
    }

    this.firstName = firstName;
    this.lastName = lastName;
}


// or

function Person(firstName, lastName) {
    if (!new.target) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

let person = Person("John", "Doe");

console.log(person.firstName);