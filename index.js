// Require statements
const inquirer = require("inquirer");
const mysql = require("mysql");
const logo = require("asciiart-logo");
const { start } = require("repl");
// require dbFunctions.js file

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "rootroot",
  database: "employee_DB",
});

connection.connect(function (err) {
  if (err) throw err;
  // run start function after the connection is made to prompt the user
  start();
});
// Function init()
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();
  console.log(logoText);

  // Function to load prompts aka the questions
  loadPrompts(
    inquirer.prompt({
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choice: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES",
        },
      ],
    })
  );

  // Switch statement
  switch (choice) {
    case "VIEW_EMPLOYEES":
      return viewEmployees();
  }
}
DB.viewEmployees();
