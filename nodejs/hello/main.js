var counter1 = require('./util/counter');
var counter2 = require('./util/counter');

console.log(counter1.count());//1
console.log(counter2.count());//2

//counter虽然被require了两次, 但却没有初始化两次


