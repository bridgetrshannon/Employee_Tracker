// Require statements
const inquirer = require("inquirer");
const mysql = require("mysql");
// requires logo package to display in terminal
const logo = require("asciiart-logo");
const { start } = require("repl");
const DB = require("./dbFunctions");
const db = new DB();
const connection = require("./db/connection");

connection.connect(function (err) {
  if (err) throw err;
  // run begin function after the connection is made to prompt the user
  begin();
});
// init function for employee manager logo
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();
  console.log(logoText);
}
// Function to load prompts aka the questions
function begin() {
  init();
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View All Employees By Department",
          value: "VIEW_EMPLOYEES_BY_DEPARTMENT",
        },
        {
          name: "View All Employees By Manager",
          value: "VIEW_EMPLOYEES_BY_MANAGER",
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Remove Employee",
          value: "REMOVE_EMPLOYEE",
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Update Employee Manager",
          value: "UPDATE_EMPLOYEE_MANAGER",
        },
        {
          name: "View All Roles",
          value: "VIEW_ROLES",
        },
        {
          name: "Add Role",
          value: "ADD_ROLE",
        },
        {
          name: "Remove Role",
          value: "REMOVE_ROLE",
        },
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add Department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Remove Department",
          value: "REMOVE_DEPARTMENT",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    })
    .then(
      function (answer) {
        switch (answer.choice) {
          case "VIEW_EMPLOYEES":
            db.viewEmployees();
            break;

          case "VIEW_EMPLOYEES_BY_DEPARTMENT":
            db.viewEmployeesDepartment();
            break;

          // case "View All Employees By Manager":
          //   viewEmployeesManager();
          //   break;

          // case "Add Employee":
          //   addEmployee();
          //   break;

          case "REMOVE_EMPLOYEE":
            db.removeEmployee();
            break;

          // case "Update Employee Role":
          //   updateEmployeeRole();
          //   break;

          // case "Update Employee Manager":
          //   updateEmployeeManager();
          //   break;

          case "VIEW_ROLES":
            db.viewAllRoles();
            break;

          // case "Add Role":
          //   addRole();
          //   break;

          // case "Remove Role":
          //   removeRole();
          //   break;

          case "VIEW_DEPARTMENTS":
            db.viewAllDepartments();
            break;

          // case "Add Department":
          //   addDepartment();
          //   break;

          // case "Remove Department":
          //   removeDepartment();
          //   break;

          // case "Quit":
          //   connection.end();
          //   break;
        }
      }

      // these are all the functions - they are to be called at specific times, not all at once

      // DB.viewEmployeesDepartment();
      // DB.viewEmployeesManager();
      // DB.addEmployee();
      // DB.removeEmployee();
      // DB.updateEmployeeRole();
      // DB.updateEmployeeManager();
      // DB.viewAllRoles();
      // DB.addRole();
      // DB.removeRole();
      // DB.viewAllDepartments();
      // DB.addDepartment();
      // DB.removeDepartment();
      // DB.quit();
    );
}
