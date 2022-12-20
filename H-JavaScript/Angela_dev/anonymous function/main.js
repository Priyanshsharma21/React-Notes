// Anonymous function is a function without name

let show = function(){
    console.log("This is a Anonymous function")
}

show() // This is a Anonymous function

// We can declear the function and immidiatly invoke it by passing params also

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(`${person.firstName}`);
})(person);

