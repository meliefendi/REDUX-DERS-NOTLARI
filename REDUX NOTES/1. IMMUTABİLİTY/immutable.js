/////////////////////////////////primitive
// let name = "melih"
// let name2 = "murat"

// console.log(name) //melih
// console.log(name2) //murat
/////////////////////////////////
// let name = "melih"
// let name2 = name

// console.log(name) //melih
// console.log(name2) //melih
/////////////////////////////////
// let name = "melih"
// let name2 = name

// name2= "murat"

// console.log(name) //melih
// console.log(name2) //murat
///////////////////////////////// referance
// const user = {
//     name:"melih",
//     isActive: true
// }
// const user2 = user;

// console.log(user) //melih
// console.log(user2) //melih
/////////////////////////////////
// const user = {
//     name:"melih",
//     isActive: true
// }
// const user2 = user;
// user2.name = "murat"

// console.log(user) //murat
// console.log(user2) //murat
/////////////////////////////////
// const user = {
//     name:"melih",
//     isActive: true
// }
// const user2 = {...user}  
// user2.name = "murat"

// console.log(user) //melih
// console.log(user2) //murat
/////////////////////////////////
// const user = {
//     name:"melih",
//     isActive: true
// }
// const user2 = Object.assign({}, user) 
// user2.name = "murat"

// console.log(user) //melih
// console.log(user2) //murat
///////////////////////////////// array

// const numbers = [ 1, 2, 3, 4 ];
// const numbers2 = numbers;

// console.log(numbers) // [ 1, 2, 3, 4 ]
// console.log(numbers2) // [ 1, 2, 3, 4 ]
/////////////////////////////////
// const numbers = [ 1, 2, 3, 4 ];
// const numbers2 = numbers;

// numbers2.push(5)

// console.log(numbers) // [ 1, 2, 3, 4, 5 ]
// console.log(numbers2) // [ 1, 2, 3, 4, 5 ]
/////////////////////////////////
// const numbers = [ 1, 2, 3, 4 ];
// const numbers2 = [...numbers];

// numbers2.push(5)

// console.log(numbers) // [ 1, 2, 3, 4 ]
// console.log(numbers2) // [ 1, 2, 3, 4, 5 ]