// Require statements
const inquirer = require("inquirer");
const mysql = require("mysql");
// requires logo package to display in terminal
const logo = require("asciiart-logo");
const { start } = require("repl");
const DB = require("./dbFunctions");
const connection = require("./db/connection")

connection.connect(function (err) {
  if (err) throw err;
  // run start function after the connection is made to prompt the user
  begin();
});
// init function for employee manager logo
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();
  console.log(logoText);
}
// Function to load prompts aka the questions
function begin() {
  inquirer.prompt({
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choice: [
      {
        name: "View All Employees",
        value: "VIEW_EMPLOYEES",
        name: "View All Employees By Department",
        value: "VIEW_EMPLOYEES_BY_DEPARTMENT",
        name: "View All Employees By Manager",
        value: "VIEW_EMPLOYEES_BY_MANAGER",
        name: "Add Employee",
        value: "ADD_EMPLOYEE",
        name: "Remove Employee",
        value: "REMOVE_EMPLOYEE",
        name: "Update Employee Role",
        value: "UPDATE_EMPLOYEE_ROLE",
        name: "Update Employee Manager",
        value: "UPDATE_EMPLOYEE_MANAGER",
        name: "View All Roles",
        value: "VIEW_ROLES",
        name: "Add Role",
        value: "ADD_ROLE",
        name: "Remove Role",
        value: "REMOVE_ROLE",
        name: "View All DepartmentS",
        value: "VIEW_DEPARTMENTS",
        name: "Add Department",
        value: "ADD_DEPARTMENT",
        name: "Remove Department",
        value: "REMOVE_DEPARTMENT",
        name: "Quit",
        value: "QUIT",
      },
    ],
  }).then((choice)=>{ 

switch (choice) {
  case "VIEW_EMPLOYEES":
    return viewEmployees();
  case "VIEW_EMPLOYEES_BY_DEPARTMENT":
    return viewEmployeesDepartment();
  case "VIEW_EMPLOYEES_BY_MANAGER":
    return viewEmployeesManager();
  case "ADD_EMPLOYEE":
    return addEmployee();
  case "REMOVE_EMPLOYEE":
    return removeEmployee();
  case "UPDATE_EMPLOYEE_ROLE":
    return updateEmployeeRole();
  case "UPDATE_EMPLOYEE_MANAGER":
    return updateEmployeeManager();
  case "VIEW_ROLES":
    return viewAllRoles();
  case "ADD_ROLE":
    return addRole();
  case "REMOVE_ROLE":
    return removeRole();
  case "VIEW_DEPARTMENTS":
    return viewAllDepartments();
  case "ADD_DEPARTMENT":
    return addDepartment();
  case "REMOVE_DEPARTMENT":
    return removeDepartment();
  case "QUIT":
    return quit();
}

//     .then(function (answer) {
//       // based on their answer, either call the bid or the post functions
//       if (answer.choice === "View All Employees") {
//         viewEmployees();
//       } else if (answer.choice === "View All Employees By Department") {
//         viewEmployeesDepartment();
//       } else {
//         viewEmployeesManager();
//       }
//     });
// }

// Switch statement with user prompts and their functions
//  =========== add the below line of code for switch statement ======


// DB.viewAllEmployees();
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
