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