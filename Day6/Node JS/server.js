// const obj = require('./module1.js');
// obj.sum(2,4);
// console.log(obj.name);

const {sum,name} = require('./module1');
sum(4,6);
console.log(name);