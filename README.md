# Twelve Workers
Employee Tracker

The purpose of this application is to allow users to dynamically update, and manage employees within the organizatoin. 

It utilizes the power of the mysql node module to use javascript to update mySQL database and view insertions using console.table.

# Installation

- Through Github create a clone of the repository.

- Once cloned to your local computer, in the terminal, run npm install.

- Load the schema.sql and the seeds.sql into MySQLWorkbench or into MYSQL using source (e.g. source db/schema.sql).

- Once the packages have been installed and MySQLWorkbench is running, run node app.js in the terminal.

- The program will prompt the user to select an option. 

# Functionality

The user will be asked to choose from the following options:

- View All Employees
- Add Employee
- Update Employee Role
- View Employees By Manager

All employee class attributes are handled in the server and, depending on which role is chosen, a salary, manager, and department are assigned

# Requirements

This application utilizes several node modules. 
Run the following npm install accordingly

> npm install mysql inquirer console.table

# License

>Copyright (c) 2021 Nell-e
