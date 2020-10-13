const connection = require("./db/connection");

class DB {
  viewEmployees() {
    // query the database for all employees
    connection.query("SELECT * FROM employee", function (err, results) {
      if (err) throw err;
      console.table(results);
    });
  }
  // viewEmployeesDepartment() {
  //   connection.query("SELECT * FROM
  // department",  ==== this is some sort of joint between department and employee tables ===
  // function (err, results) {
  //     if (err) throw err;
  //     console.table(results);
  //   });
  // viewEmployeesManager() {
  //   connection.query("SELECT * FROM
  // employee",  ==== this is some sort of joint between manager and employee tables ===
  // function (err, results) {
  //     if (err) throw err;
  //     // console.table(results);
  //     console.log("is this working?");
  //   });

  // addEmployee() {
  //   connection.query("SELECT * FROM employee", function (err, results) {
  //     if (err) throw err;
  //     // console.table(results);
  //     console.log("is this working?");
  //   });

  // removeEmployee() {
  //   connection.query("SELECT * FROM employee", function (err, results) {
  //     if (err) throw err;
  //     // console.table(results);
  //     console.log("is this working?");
  //   });

  //  updateEmployeeRole() {
  //   connection.query("SELECT * FROM employee", function (err, results) {
  //     if (err) throw err;
  //     // console.table(results);
  //     console.log("is this working?");
  //   });

  //   updateEmployeeManager() {
  //     connection.query("SELECT * FROM employee", function (err, results) {
  //       if (err) throw err;
  //       // console.table(results);
  //       console.log("is this working?");
  //     });

  viewAllRoles() {
    connection.query("SELECT * FROM employee", function (err, results) {
      if (err) throw err;
      console.table(results);
      // console.log("is this working?");
    });
  }
  // addRole() {
  //   connection.query("SELECT * FROM employee", function (err, results) {
  //     if (err) throw err;
  //     // console.table(results);
  //     console.log("is this working?");
  //   });

  //  removeRole() {
  //   connection.query("SELECT * FROM employee", function (err, results) {
  //     if (err) throw err;
  //     // console.table(results);
  //     console.log("is this working?");
  //   });

  viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, results) {
      if (err) throw err;
      console.table(results);
      // console.log("is this working?");
    });
  }

  //   addDepartment() {
  //     connection.query("SELECT * FROM employee", function (err, results) {
  //       if (err) throw err;
  //       // console.table(results);
  //       console.log("is this working?");
  //     });

  // removeDepartment() {
  //   connection.query("SELECT * FROM employee", function (err, results) {
  //     if (err) throw err;
  //     // console.table(results);
  //     console.log("is this working?");
  //   });

  //  quit() {
  //   connection.query("SELECT * FROM employee", function (err, results) {
  //     if (err) throw err;
  //     // console.table(results);
  //     console.log("is this working?");
  //   });
  //  }
}

module.exports = DB;
