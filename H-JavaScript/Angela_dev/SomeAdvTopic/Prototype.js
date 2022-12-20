// In js object can inherit property from one another
// Every object have its property call prototype
// because prototype is also a object it also have property prototype this create prototype chain

// example=>

const person = {
    name : "Priyansh"
}

console.log(person)

// In console.we get object with name property and a prototype object, this prototype object have different more property and objects

// for ecample we try to access a property which dosn;t exist in perosn onject then js will fint it in prototype and if not fount in proptotype then js will find it in prototype prototype, uitil null


// ew can add methid in prototype

person.prototype.greet = ()=>{
    return `Hi, I'm ${this.name}`
}

// if a method like person.fly not found then it throw error

// Every function have prototype object which have constructor which refer to object function
