CREATE DATABASE company;
USE company;

CREATE TABLE department (
id INT PRIMARY KEY
name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
id INT PRIMARY KEY
title VARCHAR(30) NOT NULL
salary DECIMAL NOT NULL
department_id INT
);

CREATE TABLE employee (
id INT PRIMARY KEY
first_name VARCHAR(30) NOT NULL
last_name VARCHAR(30) NOT NULL
role_id INT NOT NULL
manager_id INT NULL
);

CREATE TABLE manager (
id INT PRIMARY KEY
first_name VARCHAR(30) NOT NULL
last_name VARCHAR(30) NOT NULL
role_id INT NOT NULL
department_id INT NOT NULL
);