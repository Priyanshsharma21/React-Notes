// Shorthand for declearing the anynomnus function

const show = ()=>{
    console.log("show")
}

const add = (a,b)=>{
    return a+b
}

let result = (add(4,5))
console.log(result)
show()

const mult = (a,b)=>a*b;

console.log(mult(4,5))