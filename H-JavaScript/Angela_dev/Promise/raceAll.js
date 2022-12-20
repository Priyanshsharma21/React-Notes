

const video1 = new Promise((res,rej)=>{
    res("Video1 Uploded")
})

const video2 = new Promise((res,rej)=>{
    res("Video2 Uploded")
})

const video3 = new Promise((res,rej)=>{
    res("Video3 Uploded")
})

// run multiple promise at once 
Promise.all([
    video1,
    video2,
    video3
]).then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})

// resolve 1st one 
Promise.race(
    [
        video1,
        video2,
        video3
    ]).then((message)=>{
        console.log(message)
    }).catch((message)=>{
        console.log(message)
    })
