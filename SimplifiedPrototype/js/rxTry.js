console.log("start");

var arraySource = [
  {name: "Amir", age: 32},
  {name: "Hes", age: 21},
  {name: "Tom", age: 43},
  {name: "Sarah", age: 23}];

// Converts an array to an observable sequence
var source = Rx.Observable.from(arraySource);

source
  .filter(function (person) {
      return person.age > 30;
  })
  .map(function (person) {
      return person.name;
  })
  .forEach(function (name) {
    console.log('%s is over 32yo', name);
  });

console.log("end");
