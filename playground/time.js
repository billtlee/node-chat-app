// Jan 1st 1970 00:00:00 am UTC timestamp of 0 UNIX epic

// let date = new Date();
// console.log(date.getMonth());

let moment = require('moment');

let date = moment();
date.add(1, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY h:mm:ss'));
console.log(date.format('h:mm a'));