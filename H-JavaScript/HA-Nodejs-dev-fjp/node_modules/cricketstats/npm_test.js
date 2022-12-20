import cricindex from "./index.js";

cricindex.series().then(obj => {
    console.log("Series:", obj)
}).catch(err => {
    console.log(err)
})

cricindex.fixtures().then(obj => {
    console.log("Fixtures:", obj)
}).catch(err => {
    console.log(err)
})


cricindex.fixturesByDate('2021-11-17').then(obj => {
    console.log("Fixutres by Date", obj)
}).catch(err => {
    console.log(err)
})

cricindex.news().then(obj => {
    console.log("News", obj)
}).catch(err => {
    console.log(err)
})

cricindex.liveMatch().then(obj => {
    console.log("Live", obj)
}).catch(err => {
    console.log(err)
})

cricindex.resultsByDate('2021-11-17').then(obj => {
    console.log("Results by Date", obj)
}).catch(err => {
    console.log(err)
})