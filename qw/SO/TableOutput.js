const fs = require('fs');

const { createTable } = require('./Table');


const tableOutput = createTable(5);

fs.writeFile('table.txt', tableOutput, (err) => {
  if (err) throw err;
  console.log('Table saved permanently');
});
