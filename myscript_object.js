'use strict';
//object
const sk = {
  firstName: 'SK',
  lastName: 'SINGH',
  job: 'teacher',
  age: 2022 - 1996,
  friends: ['Mishan', 'Sujit', 'Indal'],
};

console.log(sk);

//accesing properties using dot (.)
console.log(sk.firstName);
console.log(sk.lastName);

//using bracket [] notation
console.log(sk['firstName']);

const nameKey = 'Name';
console.log(sk['first' + nameKey]);
console.log(sk['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about SK? Choose between firstName ,lastName, age, job, and friends'
);

if (sk[interestedIn]) {
  console.log(sk[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName ,lastName, age, job, and friends'
  );
}

//adding new properties and values
sk.location = 'Nepal';
sk['facebook'] = 'mrsksir';
console.log(sk);

//challenge
//sk has 3 friends, and his best frined is called Mishan

console.log(
  `${sk.firstName} has ${sk.friends.length} friends, and his best frined is called ${sk.friends[0]}.`
);
