// DEPENDENCIES
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3001',
    user: 'root',
    password: 'sarah',
    database: 'company'
});

function menu() {
    inquirer.prompt([{
        name: 'menu',
        type: 'list',
        message: "Please select a command: ",
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit']
    }])
    .then(respsonse => {
        switch (response.menu) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployee();
                break;
            case 'Quit':
                connection.end();
                break;
        }
    })
};

function viewDepartments() {
    connection.query('SELECT * FROM department', (error, result) => {
        if (error) throw error;

        console.table(result);

        menu();
    })
}

function viewRoles() {
    connection.query('SELECT * FROM role', (error, result) => {
        if (error) throw error;

        console.table(result);

        menu();
    })
}

function viewEmployees() {
    connection.query('SELECT * FROM employee', (error, result) => {
        if (error) throw error;

        console.table(result);

        menu();
    })
}