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
            console.table(results);
            // console.log("is this working?");
          }
        );
      });
  }
  //  updateEmployeeRole() {
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
          name: "departmentID",
          type: "number",
          message:
            "What is the departmentID of the role you would like to delete?",
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
          "INSERT INTO employee SET ?",
          {
            title: answer.title,
            salary: answer.salary,
            departmentID: answer.departmentID,
          },
          function (err, results) {
            if (err) throw err;
            console.table(results);
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
          name: "departmentName",
          type: "input",
          message: "What is the department you would like to add?",
        },
      ])
      .then(function (answer) {
        // getting a parse error
        connection.query(
          "INSERT INTO employee SET ?",
          {
            departmentName: answer.departmentName,
          },
          function (err, results) {
            if (err) throw err;
            console.table(results);
            // console.log("is this working?");
          }
        );
      });
  }

  //  quit() {
  //   connection.query("SELECT * FROM employee", function (err, results) {
  //     if (err) throw err;
  //     // console.table(results);
  //     console.log("is this working?");
  //   });
  //  }
}
module.exports = DB;
