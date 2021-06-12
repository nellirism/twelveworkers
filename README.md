# Twelve Workers Employee Tracker Version 1.0

1. [ Description. ](#desc)
2. [ Purpose. ](#purp)
3. [ User Story. ](#story)
4. [ Installation. ](#install)
5. [ Functionality. ](#funx)
6. [ Requirements. ](#req)
7. [ Twelve Workers Demonstration. ](#demo)
8. [ License. ](#lic)

<a name="desc"></a>
# Description

Twelve Workers Employee Tracker is an application that allows a user to manipulate the records in tables within the database that contained employee information such as Employee ID, Name, Role and Department. 

<a name="purp"></a>
# Purpose

The purpose of this application is to allow users to dynamically update, and manage employees within the organization. 
It utilizes the power of the mysql node module to use javascript to update mySQL database and view insertions using console.table.

<a name="story"></a>
# User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

<a name="install"></a>
# Installation

- Through Github create a clone of the repository.

- Once cloned to your local computer, in the terminal, run npm install.

- Load the schema.sql and the seeds.sql into MySQLWorkbench or into MYSQL using source (e.g. source db/schema.sql).

- Once the packages have been installed and MySQLWorkbench is running, run node app.js in the terminal.

- The program will prompt the user to select an option. 

<a name="funx"></a>
# Functionality

The user will be asked to choose from the following options:

- View All Employees
- Add Employee
- Update Employee Role
- View Employees By Manager

All employee class attributes are handled in the server and, depending on which role is chosen, a salary, manager, and department are assigned

<a name="req"></a>
# Requirements

This application utilizes several node modules. 
Run the following npm install accordingly

> npm install mysql inquirer console.table

<a name="demo"></a>
# Twelve Workers Demonstration

https://user-images.githubusercontent.com/71202250/121791368-03906c80-cb9e-11eb-9cb5-eb8f50449465.mp4

<a name="lic"></a>
# License

>Copyright (c) 2021 Nell-e
