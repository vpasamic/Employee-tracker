Drop Database If Exists employee_tracker;

Create Database employee_tracker;

Use employee_tracker;

CREATE TABLE department(
id integer auto_increment not null,
name varchar(30) not null,
primary key(id)
);

CREATE TABLE role(
id integer auto_increment not null,
title varchar(30) not null,
salary decimal not null,
department_id Integer not null,
foreign key (department_id) references department(id),
primary key(id)
);


CREATE TABLE employee(
id integer auto_increment not null,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id integer not null,
constraint fk_role FOREIGN KEY (role_id) REFERENCES role(id),
manager_id integer,
constraint fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id),
Primary key(id)
);