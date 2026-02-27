const _ = require('lodash');

const students = [
  { name: 'Anoop', course: 'JS' },
  { name: 'Rahul', course: 'JS' },
  { name: 'Vikas', course: 'Python' }
];

const grouped = _.groupBy(students, 'course');

console.log(grouped);
