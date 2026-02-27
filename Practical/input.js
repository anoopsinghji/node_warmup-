// taking input from user 


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });


// taking multiple input from user

// const readline= require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('What is your name? ', (name) => {
//     rl.question('What is your age? ', (age) => {
//         console.log(`Hello, ${name}! You are ${age} years old.`);
//         rl.close();
//     });
// });

// tsking input from user using Inquirer.js

const inquirer = require('inquirer');

async function main() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'age',
                message: 'What is your age?'
            }
        ]);
        console.log(`Hello, ${answers.name}! You are ${answers.age} years old.`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}


// profile project 

// const inquirer = require('inquirer');

// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'name',
//     message: 'Enter your name:'
//   },
//   {
//     type: 'input',
//     name: 'age',
//     message: 'Enter your age:'
//   },
//   {
//     type: 'list',
//     name: 'role',
//     message: 'Select role:',
//     choices: ['Student', 'Developer', 'Designer']
//   }
// ]).then((answers) => {
//   console.log("\nUser Profile:");
//   console.log(answers);
// });

// Woring with yargs or taking input with the help of yargs 

// const yargs = require('yargs');

// const argv = yargs.argv;

// console.log("Name:", argv.name);
