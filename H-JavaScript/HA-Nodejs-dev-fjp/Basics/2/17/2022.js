// To access any value we use dot notation and squre bracket notation 

// Js objects
// Objects are in key value pair 


// let person = {
//     name: "Priyansh sharma",
//     rollNo: "0808CS191147",
//     age: 20,
//     skill = [{
//         skill1: "Javascript",
//         skill2: "html",
//         skill3: "Css",
//         skill4: "java"
//     }]

// }

// console.log(person.name);
// console.log(person.rollNo);
// console.log(person.age);
// console.log(person.skill[0].skill1);


//! Note -> When we know the property like we knoe we have name inside the object 
//! Then we will use . notation to access the value 
//! We will use [] notation when we dont know the property name
// * like IronMan[i] 

let IronMan = {
    name: "Tony Stark",
    age: 55,
    isAvenger: true,
    adress: {
        city: "Torrance",
        state: "California",
        country: "USA"
    },

    Friends: ["Steave rogers", "Wanda", "Spiderman", "Doctor Strange"],
    message: function () {
        console.log(`Hello to all my ${this.Friends}`); //! this.friends = Ironman.friends
    } // this is called method

}


for (let key in IronMan) {

    console.log(key + " + " + IronMan[key]); //! [] notation use
}
console.log(IronMan.name);

console.log(IronMan.age);
console.log(IronMan.Friends[2]);
console.log(IronMan.adress.city);
console.log(IronMan.message());


let Avengers = [{
        name: "IronMan",
        age: 77,
        power: [{
            power1: "Jarvis",
            power2: "Suit"
        }]

    },
    {
        name: "captain america",
        age: 140,
        power: [{
            power1: "Shield",
            power2: "Hammer"
        }]
    },
    {
        name: "Black Widow",
        age: 50,
        power: [{
            power1: "Jevlain",
            power2: "Gun"
        }]
    },
    {
        name: "Hulk",
        age: 60,
        power: [{
            power1: "Body",
            power2: "Anger"
        }]
    },
    {
        name: "Thor",
        age: 400,
        power: [{
            power1: "Strom-Breaker",
            power2: "revange"
        }]

    }


]

console.log(Avengers[0].power.length);

for (let i = 0; i < Avengers.length; i++) {
    console.log(Avengers[i].name);
    console.log(Avengers[i].age);
    // console.log(Avengers[i].power[i].power1);
    // console.log(Avengers[i].power[i].power2);
    for (let j = 0; j < Avengers[i].power.length; j++) {
        console.log(Avengers[i].power[j].power1);
        console.log(Avengers[i].power[j].power2);
    }
}