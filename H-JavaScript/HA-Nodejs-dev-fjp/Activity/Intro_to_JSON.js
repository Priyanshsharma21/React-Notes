const minimist = require('minimist');
const fs = require('fs');

let args = minimist(process.argv);
console.log(args.dest);



// JSON -> Javascript object notation -> It is a format in which we write our file-> Object format
// JSO-> JS object 

//! Object -> Us to store data of different type together 

let s1 = {
    name: "Priyansh Sharma", /// data mambers
    age: 20
}

// * To Access It We Can Use Object_Name.member (s1.name, s1.age)

let s2 = {
    name: "Shreyansh Sharma",
    age: 16
}

let sClass = [s1, s2]; // JSO // array of object which is also an JSO

let json = JSON.stringify(sClass); //JSON

fs.writeFileSync(args.dest, json, "utf-8"); // Writing file in dest in json format


// ! Array -> Use to store data of same type together

let age_Ka_Array = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < age_Ka_Array.length; i++) {
    console.log(age_Ka_Array[i]);
}

let name_ka_array = ["Priyansh sharma", "Shreyansh Sharma", "Sushil Sharma"];

for (let i = 0; i < name_ka_array.length; i++) {
    console.log(name_ka_array[i]);
}


//! Array of object

let array_ka_object = [

    {
        name: "Priyansh Sharma",
        age: 20
    },

    {
        name: "Shreyansh sharma",
        age: 16

    },

    {
        name: "dadi sharma",
        age: 71

    }


]

for(let i=0; i<array_ka_object.length; i++){
    console.log(array_ka_object[i].name);
    console.log(array_ka_object[i].age);

}