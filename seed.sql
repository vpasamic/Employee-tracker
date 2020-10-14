use employee_tracker;

INSERT INTO department (name)
VALUES ("Design"), ("Development"), ("Finance"), ("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Visual Designer", 70000, 1), ("Senior Visual Designer", 120000, 1), ("Senior Software Engineer", 150000, 2), ("Software Engineer", 120000, 2), ("Accountant", 80000, 3), ("Marketing Manger", 93000, 4), ("Marketing Associate", 52000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ("John", "Smith", 3, null), ("Jack", "Nguyen", 4, 2), ("Elizabeth", "Carter", 6, null), ("Jason", "Bourne", 2, null), ("Jacqueline", "Reyes", 1, 4), ("Lauren", "Hill", 4, 2), ("Marc", "Sanchez", 7, 3);
