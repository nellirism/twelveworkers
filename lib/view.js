var mysql = require("mysql");
const inq = require("inquirer");
var app = require("../app");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "TigerLily$1914",
    database: "company_db"
  });
  
var queryString = "SELECT e.emp_id, e.first_name, e.last_name, title, salary, dept_name, " +
"e2.first_name AS manager_first_name, e2.last_name AS manager_last_name " +
"FROM employees AS E " +
"INNER JOIN company_role AS C ON E.emp_role_id = c.role_id " +
"INNER JOIN department AS D ON C.dept_id = d.dept_id " +
"LEFT JOIN employees AS E2 ON E.manager_id = E2.emp_id";

exports.viewAllEmployees = () => {
   
   
   connection.query(queryString, function(err,res) {
      if(err) {throw err}
      
      console.table(res)
       
    app.start();
   });
};

exports.getAllRoles = (cb) => {
 connection.query("SELECT * FROM company_role", function(err,results) {
      if(err) throw err;
      cb(results);
   });
}

exports.getAllDepartments = (cb) => {
    connection.query("SELECT * FROM department", function(err,results) {
      if(err) throw err;
      cb(results);
   });
}

exports.getAllEmployees = (cb) => {
   connection.query("SELECT * FROM employees", function(err,results) {
     if(err) throw err;
     cb(results);
  });
}

exports.viewEmployeesbyManager = (cb) => {
    const findBymanager = "SELECT e.emp_id, e.first_name, e.last_name, title, salary, dept_name, " +
    "e2.first_name AS manager_first_name, e2.last_name AS manager_last_name " +
    "FROM employees AS E " +
    "INNER JOIN company_role AS C ON E.emp_role_id = c.role_id " +
    "INNER JOIN department AS D ON C.dept_id = d.dept_id " +
    "WHERE E.manager_id = ?"
    const findByManager2 = "SELECT * FROM employees WHERE manager_id = "  

    // const findAllmanagers = "SELECT * FROM employees AS E  LEFT JOIN company_role ON E"

    connection.query(queryString, function(err1, results1) {
        if(err1) throw err;
        console.log(results1); 
        const results2 = results1.filter(man => man.title.split(" ").includes("Manager"))
        const managers = results2.map(man => ({name: man.first_name + " " + man.last_name, value: man.emp_id }))
        inq.prompt({ name: "manager",
                    type: "list",
                    message: "Which manager would you like to check?",
                    choices: managers            
        }).then(({manager}) => {
            connection.query(findByManager2 + manager, function(err, results) {
                if(err) throw err;
                console.table(results);
                app.start();
            });
        })
    })
}

// exports.viewEmployeesbydept = (cb) => {
//     const findBydept = "SELECT e.emp_id, e.first_name, e.last_name, title, salary, dept_name, " +
//     "e2.first_name AS manager_first_name, e2.last_name AS manager_last_name " +
//     "FROM employees AS E " +
//     "INNER JOIN company_role AS C ON E.emp_role_id = c.role_id " +
//     "INNER JOIN department AS D ON C.dept_id = d.dept_id " +
//     "WHERE C.dept_id = ?"
//     const findBydept2 = "SELECT * FROM employees WHERE dept_name = "  

//     // const findAllmanagers = "SELECT * FROM employees AS E  LEFT JOIN company_role ON E"

//     connection.query(queryString, function(err1, results1) {
//         if(err1) throw err;
//         console.log(results1); 
//         // const results2 = results1.filter(dept => dept.dept_name.split(" ").includes(""))
//         const managers = results2.map(man => ({name: man.first_name + " " + man.last_name, value: man.emp_id }))
//         inq.prompt({ name: "manager",
//                     type: "list",
//                     message: "Which manager would you like to check?",
//                     choices: managers            
//         }).then(({manager}) => {
//             connection.query(findByManager2 + manager, function(err, results) {
//                 if(err) throw err;
//                 console.table(results);
//                 app.start();
//             });
//         })
//     })
// }