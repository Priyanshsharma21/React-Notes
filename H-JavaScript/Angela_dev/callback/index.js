let btn = document.querySelector(".btn")

// function toggle(){
//     btn.classList.toggle('toggle')

// }

btn.addEventListener('click', ()=>{
    btn.classList.toggle('toggle')
})

// !If you call a function like this toggle() then this is not callback it called inn==mmediatily
// Js runs code from top to bottom, sometimes we want functio n be called after some condition meet  this is sync programming

//Function which is pass as a argement in another function when the task is over the value return and whole code flow not stop

function filter(numbers, callback) {
    let results = [];
    for (const number of numbers) {
      if (callback(number)) {
        results.push(number);
      }
    }
    return results;
  }
  
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  let oddNumbers = filter(numbers, function (number) {
    return number % 2 != 0;
  });
  
  console.log(oddNumbers);


//   Now callback is of two type sync and async ->
// sync is like above , execution duting the hof(which take function as a argument)

// async -> which take some time and execute after hof

// async is carry out via callback queue and event loop cause js is single threaded language

// callback have two callback -> success and failure which can be use via ternary to operate the errors


// Ex -> downloade and processinf takes time so

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        
        // process the picture once it is completed
        callback(url);
    }, 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';
download(url, process);