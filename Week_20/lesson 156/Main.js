// let MyPromise = new Promise((resolve, reject) => {
//     console.log("hawl ayaa socoto  .......")
//     let guul = true;
//     if(!guul){
//         reject("qalad ayaa dhacay")
//     }
//     resolve({name: "cimraan", age: 19, phone:1212121})
// })

// MyPromise.then(function(data) {
//     console.log(data)
// }).catch(function(Error){
//     console.log(Error)
// }).finally((function() {
//     console.log("shaqdii way dhamaatay")
// }))


// tusaale 2
const getData = () => {
    return new Promise((resolve,reject) => {
        console.log("shaqada waa la bilabay")
        setTimeout(() => {
            let networkOk = true 
            if(!networkOk){
                reject("qalad ayaa dhacay")
            } else {
                resolve({name: "cismaan", age: 63, phone:25252525})
            }
        },4000)

    })
}

getData()
.then((data) => console.log(data))
.catch((Error) => console.log(Error))
.finally(() => console.log("shaqadii way dhamaatay"))








