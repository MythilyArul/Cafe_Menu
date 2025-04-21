// Promises all:

const promiseOne = new Promise((resolve,reject) =>{
    setTimeout(()=>{ resolve("promise 1 is resolved")},1000);
   })
const promiseTwo = new Promise((resolve,reject) =>{
    setTimeout(() => {
       resolve("promise 2 is resolved")
    }, 2000);
      })
const promiseThree = new Promise((resolve,reject) =>{
    setTimeout(() => {
        reject("promise 3 is rejected")
    }, 1000);
      
      })

Promise.all([promiseOne,promiseTwo,promiseThree])
     .then((data)=>{
        console.log(data[0],data[1],data[2])
     }).catch((error)=>{
        console.log(error)
     })


// const promiseOne = new Promise((resolve,reject) =>{
//  resolve("promise 1 is resolved")
// })
// const promiseTwo = new Promise((resolve,reject) =>{
//     resolve("promise 2 is resolved")
//    })
// const promiseThree = new Promise((resolve,reject) =>{
//     reject("promise 3 is rejected")
//    })
// const promiseFour = new Promise((resolve,reject) =>{
//     const love=false;
//     if (love){
//         resolve("love is true")
//     }
//    else{
//     reject("love is false")
//    }
//    })
         
// promiseOne
// .then((value)=>{
//     console.log(value)
//     return promiseTwo;
// }).then((value)=>{
//     console.log(value)
//     return promiseThree;
// }).catch((value)=>{
//     console.log(value)
//     return promiseFour;
// }).then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })




// const promise= new Promise((resolve,reject) => {
//     const randomnumber =Math.floor(Math.random() * 10);
//     if (randomnumber>4){
//         resolve("greater than 4");
//     }
//     else{
//         reject("opps next time");
//     }
//     console.log(randomnumber);
// })

// promise.then((value)=>{ //value of resolve is given to this callback(value) arguments
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })





// const promise= new Promise((resolve,reject)=>{
//     const started = true;
//     if(started)
//     {
//         resolve("success")
//     }
//     else{
//        reject("fail") 
//     }
// });
// console.log(promise);