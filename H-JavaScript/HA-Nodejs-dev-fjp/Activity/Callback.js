// Theory-> Let we have cpu task(prime no.) & Disk task (read file) both can be done at a time independent processes 
// serial 




// Let we have task1 -> Disk read  // 10s
//             task2 -> CPU       // 10s
//             task3 -> Disk write // 15s
//             task4 -> CPU       // 15s
//  Total => 50s , to complete task 






// What if -> we run two process parallely

// task1-> and cpu-> 15s together
// task2->10s and cpu ->15s together 

// total -> 30s work complete 

// 1 . without callback read file
// programe -> customer 
// fs -> seller 
// customer wants to buy grossary and then go for bike servicing



let data = fs.readFileSync('args.source', "utf-8");
//* programer is waiting fs to do read then ,programer resive it in data variable(jhola) then go for bike servicing


// 2. With callbacks

fs.readFile('args.source', function (err, data) { //! Whatever we pass in first parameter which is the thing we want will be store in data of function parameter
    // task // * If file rade then it call data otherwise err
})

//* In callback programmer says fs to perform task-> give grossary -> when grossary collected then give it to the function
// * until then I am going for bike servicing 

// Note -> Read file sync  block the flow of the programe while read file don't block the flow