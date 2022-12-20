const minimist = require('minimist');
const args = minimist(process.argv); // We can take i/p from user

console.log(args);

// Format-> -x=3  -y=5  --name="Priyansh sharma" --age=20

// we can get the data from console like this 

let name = args.name;
let age = args.age;

if(age<=20){

   setTimeout(function(){
    console.log("Yo Bro "+name+" What's up")   // Use to set time inter in which the message will be shone in console
   },1000)

}else{
    setTimeout(function(){
        console.log("Hello , to kaise hai aap log");
       },2000)
}