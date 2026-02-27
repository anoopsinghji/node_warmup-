const fs = require('fs');
const { getUserReport } = require('./output');

const report = getUserReport();


fs.writeFile(
  'report.json',JSON.stringify(report, null, 2),
  (err) => {
    if (err) throw err;
    console.log('Report saved');
  }
);
