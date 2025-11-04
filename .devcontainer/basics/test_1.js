//  console.log("Ifti");
// console.log("Tanjimul Islam")
// console.log("Ifti Tanjimul Islam");

// "use strict";
//alert("Hello World!");  

//for java script go to https://tc39.es/ecma262/

//JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. 
//As of 2024, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.
//All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.

//JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. 
//It has dynamic typing, prototype-based object-orientation, and first-class functions.

//JavaScript was initially created to "make web pages alive".
//The programs in this language are called scripts.
//They can be written right in a web page's HTML and run automatically as the page loads.
//Scripts are provided and executed in the user's device/browser, rather than on the web server, 
//which makes JavaScript faster than server-side programming languages that need to communicate with a server in order to run code.

//JavaScript can be used for Client-side developments as well as Server-side developments.

//Client-side developments: 
//JavaScript is primarily used for client-side scripting where scripts written in JavaScript are embedded in a webpage's HTML and run on the user's browser. 
//This allows for interactive web pages and is an essential part of web applications. Examples include form validation, dynamic content updates, animations, and handling user events.

//Server-side developments:
//With the advent of Node.js, JavaScript can also be used for server-side development. 
//Node.js is a runtime environment that allows developers to use JavaScript to write server-side code, enabling the creation of scalable network applications. 
//This has led to the rise of full-stack JavaScript development, where both the client and server sides of an application are built using JavaScript.

//JavaScript can also be used in non-web environments such as mobile app development (using frameworks like React Native), desktop applications (using Electron), and even game development.

//also got to mdn web docs for more info
//https://developer.mozilla.org/en-US/docs/Web/JavaScript


 //number => 2 to the power of 53
 //bigint => 123n
 //string => '' "" ``
 //boolean => true/false
 //null => standalone value . It is an object
 //undefined =>
 //symbol => unique identifier
 //object => key-value pairs


 //

//console.log(typeof name);
//console.log(typeof age);
//console.log(typeof isLoggedIn);

//let score = 100;1; //number
//let score2 = 123n; //bigint

//console.log(typeof score);
//console.log(typeof score2);

// let firstName = "Ifti";
// let lastName = "Tanjimul Islam";
// console.log(firstName + " " + lastName); //concatenation
// console.log(`${firstName} ${lastName}`); //template literal


// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); 

// ***************** Oparations *****************

// ...existing code...
// let value = 3
// let negValue = -value
// console.log(negValue);
// // ...existing code...

//  let str1 = "hello"
//  let str2 = "Ifti"

//  let str3 = str1 + str2
//  console. log(str3);



// console. log(null > 0);
// console. log(null == 0);        
// console. log(null >= 0);   
// console. log(undefined == 0);
// console. log(undefined > 0);
// console. log(undefined < 0);
// console. log(undefined >= 0);
// console. log(undefined <= 0);
// console. log(undefined === 0);

// Array, Objects, Functions
const heros = ["shakib", "tamim", "mushfiq"];
// Array

let myObj = {
    name: "Ifti",
    age: 24,
    isLoggedIn: true
};
// Object

const myFunction = function() {
    console.log("This is my function");
};
// Function

// Stack (primitive types) vs Heap (objects, arrays, functions)
let myYoutubename = "Ifti Tanjimul Islam"; // primitive type (string) → stored in stack
let anotherName = myYoutubename;           // copy of the value (not a reference)
anotherName = "New Name";                  // reassigning anotherName doesn’t affect myYoutubename

console.log(myYoutubename); // Output: Ifti Tanjimul Islam
console.log(anotherName);   // Output: New Name
