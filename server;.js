const inquirer = require('inquirer');
const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee_tracker'
});


db.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {
  inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: []
}
)};