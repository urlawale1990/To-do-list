// 1. Create an array containing the numbers 1 to 10.
// const arrayElement = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arrayElement)


// 2. Access the third element of the array
// const arrayElement = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let itemsArray = arrayElement.at(2)
// console.log(itemsArray)


// 3. Change the value of the last element to 0.
// let arrayElement = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let itemArray = arrayElement.pop[9]
// arrayElement.push(0)
// console.log(arrayElement)

// 4. Add a new element to the end of the array

// 4. Add a new element to the end of the array
// let arrayElement = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arrayElement.push(11)
// console.log(arrayElement)

// 5. Remove the first element from the array
// let arrayElement = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let itemArray = arrayElement.shift()
// console.log(arrayElement)

// 6. Find the index of the number 5 in the array

// let arrayElement = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let itemArray = arrayElement.indexOf(5)
// console.log(itemArray)

// 7. Check if the array contains the number 8.

// let arrayElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let containsNumber8 = arrayElement.includes(8);

// if (containsNumber8) {
//   console.log("The array contains the number 8.");
// } else {
//   console.log("The array does not contain the number 8.");
// }

// 8. Reverse the order of the elements in the array

// let arrayElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let itemArray = arrayElement.reverse();

// console.log(arrayElement)

// 9. Sort the array in ascending order

// let arrayElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let itemArray = arrayElement.sort(function(a,b){
//     return a - b;
// })

// console.log(arrayElement)

// 10.Create a new array containing only the even numbers from the original array.

// let arrayElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Filter out only the even numbers
// let evenNumbersArray = arrayElement.filter(function(element) {
//   return element % 2 === 0;
// });

// console.log("Array with Even Numbers:", evenNumbersArray);


// 11.Write a while loop that prints the numbers from 1 to 10.

// let number = 1;

// while (number <= 10) {
//     console.log(number)
//     number++
// }

// 12. Write a while loop that sums all the numbers in an array.

// let arrayElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// let index = 0;

// while (index < arrayElement.length) {
//   sum += arrayElement[index];
//   index++;
// }

// console.log("Sum of the array elements:", sum);

// 13.Write a while loop that finds the largest number in an array.

// let arrayElement = [50, 65, 87, 90, 5, 88, 56, 45];
// let i = 1
// let biggestNumber = arrayElement[0]

// while (i < arrayElement.length) {
//     if (arrayElement[i] > biggestNumber) {
//         biggestNumber = arrayElement[i]
//     } 

//     i++;
// }

// console.log(biggestNumber)

// 14.Write a while loop that prompts the user for input until they enter a valid email address
// let loggedIn = false;
// let userName;
// let password;

// while (!loggedIn) {
//     userName = window.prompt(`Enter your email address`)
//     password = window.prompt(`Enter your password`)
    
//     if(userName === "myUserName" && password === "myPassword"){
//         loggedIn = true
//         console.log("You have logged in!")
//     }
//     else{
//         console.log("Invalid credentials! Please enter a valid username and password")
//     }
// }

// 15.Write a while loop that simulates a dice roll until a 6 is rolled.

// let diceResult;
// let rolls = 0;

// while (diceResult !== 6) {
//   diceResult = Math.floor(Math.random() * 6) + 1;
//   rolls++;
//   console.log("Roll #", rolls, ":", diceResult);
// }

// console.log("It took", rolls, "rolls to get a 6.");


// 16.Use the forEach method to print each element of an array.
// let arrayElement = [50, 65, 87, 90, 5, 88, 56, 45];

// arrayElement.forEach(function(eachElements){
//     console.log(eachElements)
// })


// 17.Use the forEach method to double each element of an array
// let arrayElement = [50, 65, 87, 90, 5, 88, 56, 45];

// arrayElement.forEach(function(eachElements){
//     let doubleElements = eachElements * 2

//     console.log(doubleElements, eachElements)
// })


// 18.Use the forEach method to create a new array containing only the strings from a mixed array.

// let mixedArray = [1, 'apple', 3, 'banana', 'orange', 6, 'grape'];

// let stringArray = [];

// mixedArray.forEach(function(element) {
//   if (typeof element === 'string') {
//     stringArray.push(element);
//   }
// });

// console.log("Array with only strings:", stringArray);

// 19.Use the forEach method to find the sum of all even numbers in an array.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sumOfEvenNumbers = 0;

// numbers.forEach(function(element) {
//     if (element % 2 === 0) {
//         sumOfEvenNumbers += element;
//     }
// });

// console.log(sumOfEvenNumbers);


// Use the forEach method to filter an array based on a certain condition.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = [];

// numbers.forEach(function(element) {
//     if (element % 2 === 0) {
//         evenNumbers.push(element);
//     }
// });

// console.log("Filtered array of even numbers:", evenNumbers);


// 21.Define a function that accepts any number of arguments using rest parameters

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [variable1, ...restArrays] = numbers
// console.log(numbers)

// 22.Use rest parameters to create a function that calculates the average of a list of numbers

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function average(...numbers) {
//   if (numbers.length === 0) {
//     return 0; // To avoid division by zero
//   }

//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   const averageNumber = sum / numbers.length;
//   return averageNumber;
// }

// const result = average(...numbers);
// console.log("Average:", result);

// // 23.Use rest parameters to create a function that logs all the arguments passed to it.

// function logArguments(...args) {
//   console.log("Arguments:", args);
// }

// logArguments(1, 'apple', true, [1, 2, 3]);
// logArguments('hello', 42, false);
// logArguments(); // No arguments


// Use rest parameters to create a function that combines multiple arrays into a single array

// function combineArrays(...arrays) {
//   return arrays.reduce((combinedArray, currentArray) => combinedArray.concat(currentArray), []);
// }

// const array1 = [1, 2, 3];
// const array2 = ['a', 'b', 'c'];
// const array3 = [true, false];

// const result = combineArrays(array1, array2, array3);

// console.log("Combined Array:", result);

// 25.Use rest parameters to create a function that accepts a variable number of objects and merges them into a single object.


// function mergeObjects(...objects) {
//   return Object.assign({}, ...objects);
// }

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const obj3 = { d: 5 };

// const mergedObject = mergeObjects(obj1, obj2, obj3);

// console.log("Merged Object:", mergedObject);


// 26.Create an object literal representing a person with properties for name, age, and address.

// const personProfile = {
//   personName : "Toheeb",
//   personAge : 30,
//   address: "Phase 1 Lekki"
// }

// console.log(personProfile)


// Access the name property of the person object.
// const personProfile = {
//   personName : "Toheeb",
//   personAge : 30,
//   address: "Phase 1 Lekki"
// }

// console.log(personProfile.personName)

// Change the value of the age property

// const personProfile = {
//   personName: "Toheeb",
//   personAge: 30,
//   address: "Phase 1 Lekki"
// };

// personProfile.personAge = 31;

// console.log(personProfile.personAge); 

// 29.Add a new property to the object called "email".

// const personProfile = {
//   personName: "Toheeb",
//   personAge: 30,
//   address: "Phase 1 Lekki"
// };

// personProfile.email = "toheeb@gmail.com"

// console.log(personProfile);

// 30.Delete the address property from the object.

// const personProfile = {
//   personName: "Toheeb",
//   personAge: 30,
//   address: "Phase 1 Lekki"
// };

// // Deleting the "address" property
// delete personProfile.address;

// console.log(personProfile)

// 31 Write a for loop that prints the numbers from 1 to 10.

// for(let i = 0; i <= 10; i++){
//   console.log(i)
// }

// // 32.Write a for loop that sums all the numbers in an array

// const arrayNumber = [12, 58, 25, 74, 92];
// let sum = 0;

// for (let index = 0; index < arrayNumber.length; index++) {
//   sum += arrayNumber[index];
// }

// console.log("Sum:", sum);

// Write a for loop that finds the largest number in an array.

// const arrayNumber = [12, 58, 25, 74, 92];
// let largestNumber = arrayNumber[0];

// for (let index = 1; index < arrayNumber.length; index++) {
//   if (arrayNumber[index] > largestNumber) {
//     largestNumber = arrayNumber[index];
//   }
// }

// console.log("Largest Number:", largestNumber);


// 34.Write a for loop that creates a new array containing the squares of the numbers in another array

// const originalArray = [1, 2, 3, 4, 5];
// let squaredArray = [];

// for (let i = 0; i < originalArray.length; i++) {
//   squaredArray.push(originalArray[i] ** 2);
// }

// console.log("Original Array:", originalArray);
// console.log("Squared Array:", squaredArray);

// 35.Write a for loop that iterates over an object's properties and values.

// const sampleObject = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   occupation: 'Engineer'
// };

// for (const [key, value] of Object.entries(sampleObject)) {
//   console.log(`${key}: ${value}`);
// }


// // .Use a for...of loop to print each element of an array.

// const myArray = [1, 2, 3, 4, 5];

// for (const element of myArray) {
//   console.log(element);
// }


// // .Use a for...of loop to create a new array containing the string lengths of each element in another array.

// const mixedArray = [1, 2, 3, 4, 5, "Joe", "Edwin", "Tola"];
// let stringLengthArray = [];

// for (const element of mixedArray) {
//   if (typeof element === 'string') {
//     stringLengthArray.push(element.length);
//   }
// }

// console.log(stringLengthArray);


// 38.Use a for...of loop to iterate over the keys of an object.

// const myObject = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// for (const key of Object.keys(myObject)) {
//   console.log(key);
// }

// 39.Use a for...of loop to iterate over the values of an object.

// const myObject = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// for (const value of Object.values(myObject)) {
//   console.log(value);
// }

// .Use a for...of loop to iterate over both keys and values of an object.

const myObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (const [key, value] of Object.entries(myObject)) {
  console.log(`${key}: ${value}`);
}
