const myCodeImmersivesObj = {
  objectify: 'me'
};

// Set the value of property `objectify` to be "yourself".
myCodeImmersivesObj.objectify = 'yourself';
// myCodeImmersivesObj;

// Add the new property `isAnExcellentObject` and set it to `true`.
myCodeImmersivesObj.isAnExcellentObject = true;
// myCodeImmersivesObj;

// Add the property `term` and set it to 1.
myCodeImmersivesObj.term = 1;
// myCodeImmersivesObj;

// Now add 1 to the value of your object's `term` property and put that new value back in your object's `term`.
myCodeImmersivesObj.term = myCodeImmersivesObj.term + 1;
// myCodeImmersivesObj;

// Now add a new property called `currentScore` and set it to 3.
myCodeImmersivesObj.currentScore = 3;
// myCodeImmersivesObj;

// Now add a new property called `cumulativeScore` and set it to 50.
myCodeImmersivesObj.cumulativeScore = 50;
// myCodeImmersivesObj

// Now add your `currentScore` and your `cumulativeScore` and put it back in `cumulativeScore`.
myCodeImmersivesObj.cumulativeScore = myCodeImmersivesObj.currentScore + myCodeImmersivesObj.cumulativeScore;
// myCodeImmersivesObj;

// Now add a property called `I am exactly this cool` (you'll need bracket notation!) and set it to `soooooo cool`.
myCodeImmersivesObj['I am exactly this cool'] = `soooooo cool`;
// myCodeImmersivesObj;

// Now make a new EMPTY object that represents yourself.
me = {};
// me;

// Add a `firstName` property and set it to a string.
me.firstName = 'Timothy';
// me;

// Add a `lastName` property and set it to a string.
me.lastName = 'Do';
// me;

// Add a `fullName` property and set it to the name properties put together with a space string in the middle.
me.fullName = me.firstName + ' ' + me.lastName;
// me;

// Add an `age` property and set it to a number.
me.age = 36;
// me;

// Add an address property and set it to an empty array.
me.address = [];
// me;

// Now push three strings into that array.
me['address'].push('Flushing', 'Queens', 'New York');
me;


// Now make a new object, but this time we'll pre-populate it, not set it in any lines below it. In other words, the properties should be set the same way I initially set the `codeImmersivesObject` on line 1. It can be called whatever you want and can have whatever properties you want, as long as they include at least one string value, boolean value, number value, and array of numbers. The important thing here is: this should all be done within the brackets of the object, not below the place where the object is declared.
movieOf2019 = {
  name: 'Avengers: Endgame',
  ['Is it fun?']: true,
  IMDbRate: 8.4,
  series: [1, 2, 3, 4]
}
movieOf2019;

// As a stretch goal, pre-populate the object with at least one property using bracket notation as well. 
