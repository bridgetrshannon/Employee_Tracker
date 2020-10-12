class DB {
  viewAllEmployees() {
    // query the database for all employees
    connection.query("SELECT * FROM employee", function (err, results) {
      if (err) throw err;
    });
    //   viewEmployeesDepartment() {
    //     // view department
    //   }
    //   viewEmployeesManager() {
    //     // view manager
    //   }
    //   addEmployee() {
    //     // add employee
    //   }
    //   removeEmployee() {
    //     // remove employee
    //   }
    //   updateEmployeeRole() {
    //     // update role
    //   }
    //   updateEmployeeManager() {
    //     // update manager
    //   }
    //   viewAllRoles() {
    //     // view all roles
    //   }
    //   addRole() {
    //     // add role
    //   }
    //   removeRole() {
    //     // remove role
    //   }
    //   viewAllDepartments() {
    //     // view departments
    //   }
    //   addDepartment() {
    //     // add department
    //   }
    //   removeDepartment() {
    //     // remove department
    //   }
    //   quit() {
    //     // quit
    //   }
  }
}
// module.exports = DB;
