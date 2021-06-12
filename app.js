var mysql = require("mysql");
var inq = require("inquirer");
var table = require("console.table");
var add = require("./lib/add");
var update = require("./lib/update");
var view = require("./lib/view");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "TigerLily$1914",
  database: "company_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  exports.start();
});

exports.start = () => {
    inq.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: [
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "Update Employee Managers",
                "View Employees by Manager",
                "View Employees by Department",
                "Delete Department",
                "Delete Role",
                "Delete Employee",
                "View Total Budget",
                "EXIT"                
            ]
        }
    ])
    .then(function(answer) {
      if(answer.choice === "View All Employees") {
        view.viewAllEmployees();
      }
      else if(answer.choice === "Add Employee") {
        add.addEmployee();
      }      
      else if(answer.choice === "Update Employee Role") {
        update.updateRole();
      }
      else if(answer.choice === "View Employees by Manager") {
        view.viewEmployeesbyManager();
      }
    //   else if(answer.choice === "View Employees by Department") {
    //     update.viewEmployeesbyDept();
    //   }
      else if(answer.choice === "EXIT") {
        connection.end();
        process.exit();
      }
    });
    
};