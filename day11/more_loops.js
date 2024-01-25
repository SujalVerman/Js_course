// let num=[1,2,3,4,55,34,23,12]
// num.map((value , index , array) => {         //  Map function loop
//     console.log(value, index , array)  // it will show the value, index, array for each element with a new array
// });

// let num=[1,2,3,4,55]
// let a =num.filter((element)=>{   // filter function loop
//     return element>10   // it will return according to condition and a new array
// })  
// console.log(a)

let num=[1,2,3,4,55]
let a = num.reduce((value,v)=>{
    return value+v     // it will add the 1 + 2 + 3 + 4 + 55 and return the new array
})
console.log(a)

