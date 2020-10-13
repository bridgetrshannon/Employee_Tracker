const connection = require("./db/connection");
const inquirer = require("inquirer");

class DB {
  viewEmployees() {
    // query the database for all employees
    connection.query("SELECT * FROM employee", function (err, results) {
      if (err) throw err;
      console.table(results);
    });
  }

  addEmployee() {
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message:
            "What is the first name of the employee you would like to add?",
        },
        {
          name: "last_name",
          type: "input",
          message:
            "What is the last name of the employee you would like to add?",
        },
        {
          name: "role_id",
          type: "number",
          message: "What is the role id of the employee you would like to add?",
          validate: function (input) {
            if (typeof input == "NaN") {
              return "You need to provide a number";
            }
            return true;
          },
        },
        {
          name: "manager_id",
          type: "number",
          message:
            "What is the manager id of the employee you would like to add?",
          validate: function (input) {
            if (typeof input == "NaN") {
              return "You need to provide a number";
            }
            return true;
          },
        },
      ])
      .then(function (answer) {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id,
          },
          function (err, results) {
            if (err) throw err;
            console.log("You've added an employee!");
            // console.table(results);
            // then want to call viewEmployees(); to see new employee added to table but saying viewEmployees(); is undefined
          }
        );
      });
  }

  // this function is throwing a parse error for line 113
  // deleteEmployee() {
  //   inquirer
  //     .prompt([
  //       {
  //         name: "first_name",
  //         type: "input",
  //         message:
  //           "What is the first name of the employee you would like to delete?",
  //       },
  //       {
  //         name: "last_name",
  //         type: "input",
  //         message:
  //           "What is the last name of the employee you would like to delete?",
  //       },
  //       {
  //         name: "role_id",
  //         type: "number",
  //         message:
  //           "What is the role id of the employee you would like to delete?",
  //         validate: function (input) {
  //           if (typeof input == "NaN") {
  //             return "You need to provide a number";
  //           }
  //           return true;
  //         },
  //       },
  //       {
  //         name: "manager_id",
  //         type: "number",
  //         message:
  //           "What is the manager id of the employee you would like to delete?",
  //         validate: function (input) {
  //           if (typeof input == "NaN") {
  //             return "You need to provide a number";
  //           }
  //           return true;
  //         },
  //       },
  //     ])
  //     .then(function (answer) {
  //       connection.query(
  //         "DELETE FROM employee WHERE ?",
  //         {
  //           first_name: answer.first_name,
  //           last_name: answer.last_name,
  //           role_id: answer.role_id,
  //           manager_id: answer.manager_id
  //         },
  //         function (err, results) {
  //           if (err) throw err;
  //           console.log("is this working?");
  //           // console.table(results);
  //           // then want to call viewEmployees(); to see new employee added to table but saying viewEmployees(); is undefined
  //         }
  //       );
  //     });
  // }

  updateEmployeeRole() {
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message:
            "What is the first name of the employee you would like to update the role for?",
        },
        {
          name: "last_name",
          type: "input",
          message:
            "What is the last name of the employee you would like to update the role for?",
        },
        {
          name: "role_id",
          type: "number",
          message: "What is the employee's updated role_id?",
          validate: function (input) {
            if (typeof input == "NaN") {
              return "You need to provide a number";
            }
            return true;
          },
        },
        {
          name: "manager_id",
          type: "number",
          message:
            "What is the manager id of the employee you would like to to update the role for?",
          validate: function (input) {
            if (typeof input == "NaN") {
              return "You need to provide a number";
            }
            return true;
          },
        },
      ])
      .then(function (answer) {
        connection.query(
          "UPDATE employee SET ?",
          {
            // first_name: answer.first_name,
            // last_name: answer.last_name,
            role_id: answer.role_id,
            // manager_id: answer.manager_id,
          },
          function (err, results) {
            if (err) throw err;
            // console.log("is this working?");
            console.log("You've updated an employee!");
            // then want to call viewEmployees(); to see new employee added to table but saying viewEmployees(); is undefined
          }
        );
      });
  }
  //   connection.query("SELECT * FROM employee", function (err, results) {
  //     if (err) throw err;
  //     // console.table(results);
  //     console.log("is this working?");
  //   });

  viewAllRoles() {
    connection.query("SELECT * FROM role", function (err, results) {
      if (err) throw err;
      console.table(results);
      // console.log("is this working?");
    });
  }

  addRole() {
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "What is the title of the role you would like to add?",
        },
        {
          name: "salary",
          type: "number",
          message: "What is the salary of the role you would like to add?",
          validate: function (input) {
            if (typeof input == NaN) {
              return "You need to provide a number";
            }
            return true;
          },
        },
        {
          name: "department_id",
          type: "number",
          message:
            "What is the department id of the role you would like to add?",
          validate: function (input) {
            if (typeof input == NaN) {
              return "You need to provide a number";
            }
            return true;
          },
        },
      ])
      .then(function (answer) {
        // getting a parse error
        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.department_id,
          },
          function (err, results) {
            if (err) throw err;
            console.log("You've added a role!");
            // console.log("is this working?");
          }
        );
      });
  }

  viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, results) {
      if (err) throw err;
      console.table(results);
      // console.log("is this working?");
    });
  }

  addDepartment() {
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is the department you would like to add?",
        },
      ])
      .then(function (answer) {
        // getting a parse error
        connection.query(
          "INSERT INTO department SET ?",
          {
            name: answer.name,
          },
          function (err, results) {
            if (err) throw err;
            console.log("You've added a department!");
          }
        );
      });
  }
}
module.exports = DB;
