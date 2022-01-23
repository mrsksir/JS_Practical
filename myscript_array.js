'use strict';

//Create Array
//There are 2 methods to create Array
//1st method to create array
//const names = ['sumit', 'arun', 'jyoti'];
var myname = 'SK';

//2nd method to create array
const names = new Array(myname, 20, 'sumit', 'arun', 'jyoti', true);

// console.log(names[0]) ;
// console.log(names[1]);
// console.log(names.length);

//Method
//add element at the end
names.push('Bot');

//add element at begining
names.unshift('Sanjay');

//delete element from the end
names.pop();

//delete element from the begining
names.shift();

// names.slice()
// names.splice()

// console.log(names);
// console.log(names.indexOf('sumit'));
// console.log(names.indexOf('arun'));
// console.log(names.indexOf('abc'));

// console.log(names.includes('sumit'));
// console.log(names.includes('arun'));
// console.log(names.includes('abc'));

if (names.includes('SK')) {
  //  console.log("SK Sir is present");
} else {
  //  console.log("Not present");
}

//Object
//There are 3 methods to create object
//1st method
let fname = 'SK';
let lname = 'SINGH';
let fullName = fname + ' ' + lname;

// console.log(fname);
// console.log(lname);
// console.log(fullName);

// const teacher = {
//     fname: "SK",
//     lname: "SINGH",
//     fullName: function () {
//         return this.fname + " " + this.lname
//     }
//}

//2nd Method for object creation
// const teacher = new Object();
// teacher.fname = "SK";
// teacher.lname = "SINGH";
// teacher.fullName = function () {
//     return this.fname + " " + this.lname
// }

//3rd method to create object
function Teacher(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.fullName = function () {
    return fname + ' ' + lname;
  };
}

const teacher = new Teacher('SK', 'SINGH');

// delete teacher.fname;
teacher.rno = 20;

//1st method to access object elements
// console.log(teacher.fname);
// console.log(teacher.lname);
// console.log(teacher.rno);
// console.log(teacher.fullName());

//2st method to access object elements
// console.log(teacher['fname']);
// console.log(teacher['lname']);
// console.log(teacher['rno']);
// console.log(teacher['fullName']());

//3rd Method to access object element
var first = 'fname';
var last = 'lname';
var r = 'rno';
var firstLast = 'fullName';

// console.log(teacher[first]);
// console.log(teacher[last]);
// console.log(teacher[r]);
// console.log(teacher[firstLast]());

//Access using For loop
for (const key in teacher) {
  if (key === 'fullName') {
    //   console.log(teacher[key]());
  } else {
    // console.log(teacher[key]);
  }
}

//**********Function Declaration
// function increment(no) {
//     return ++no;
// }

//Function Expression
// let increment = function (no) {
//     return ++no;
// }

//Arrow function
//let increment = no => ++no;
//console.log(increment(5));

//let fullName2 = (fname, lname) => fname + " " + lname;

// let fullName2 = (fname, lname) => {
//     teacher.fullName(fname, lname);
//     return fname + " " + lname;
// }

//console.log(fullName2("SK", "SINGH"));

//Coding Challenge #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) return bill * 0.15;
//   else return bill * 0.2;
// }

// for (let bill = 0; bill < bills.length; bill++) {
//   const tip = calcTip(bills[bill]);
//   tips.push(tip);
//   totals.push(tip + bills[bill]);
// }

// console.log(bills, tips, totals);

// function calcAverage(arr) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
//   }
//   return sum / arr.length;
// }

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
