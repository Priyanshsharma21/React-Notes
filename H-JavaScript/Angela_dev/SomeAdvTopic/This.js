// This keyword refers to current instance of class, in js its different
// In js this refer to an object in which function is a property

// const person = ()=>{
//     name : "Priyansh Sharma",
//     next : function () {
//         return this.name;
//     },
// }


// In global contect this refer to window object which is perent of all the object

this.color = "Purple"
console.log(window.color)

// In strict mode this refer to undefine inside function
// In non strict mode it refer to window object

// In object this refer to property of its object (parent)

// In constructor this is create when we use new keyword and then return at the end

// we can use call and apply method to use this of dirrwfent object

function getBrand(prefix) {
    console.log(prefix + this.brand);
}

let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");



// In es6 we have Arrow function in which this is set lexically

// Arrow function dosn't create its own execution contect instead it inherits it from  its parent

// Arrow functin not have this, it refer to global object hance we should not use it in addEventListener