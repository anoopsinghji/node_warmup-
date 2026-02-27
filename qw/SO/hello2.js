const fs = require('fs');

//create file
// fs.writeFile('hello.txt', 'HEllo ji',(err)=>{

//     if(err) throw err;
//     console.log('file created')
// });

//read file

// fs.readFile('hello.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//append file

// fs.appendFile('hello.txt','\n from LPU',(err)=>{
//     if(err) throw err;  
//     console.log('file appended in the file')
// })

// delete file

fs.unlink('hello.txt', (err)=> {
    if(err) throw err;
    console.log('file deleted');
}

);