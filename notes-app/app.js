const chalk = require('chalk');
const getNotes = require("./notes.js")

const notes = getNotes()

console.log(chalk.bold.underline(notes));
console.log(chalk.red("Error!"))
