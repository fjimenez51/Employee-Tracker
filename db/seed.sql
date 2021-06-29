use employee_db;

insert into department (name) values 
("Human Resources"),
("IT"),
("Sales"),
("Accounting"),
("Logistics"),
("Customer Service"),
("Recruiting"),
("Upper Management"),
("Payroll");

insert into role (title, salary, department_id) values 
("Receptionist", 42000, 6),
("IT Manager", 75000,2),
("Database Admin", 88000,2),
("Recruitment Specialist", 61500,7),
("Sr Test Engineer", 80000,5),
("CSR", 52000,1),
("Payroll Administrator", 48000,9),
("Client Services Manager", 79000,1),
("Fulfillment Director", 70000, 3),
("President of Sales", 115000,3),
("AR Analyst", 60000,4),
("AP Analyst", 60000,4),
("Project Accountant", 80000,4),
("Senior Accountant", 90000,4),
("Dev Ops", 73000,2),
("QA Analyst", 68000,5),
("Full Stack Developer", 90000, 2),
("CEO", 200000, 8),
("COO", 190000,8),
("CTO", 185000,8); 

insert into employee (first_name, last_name, role_id, manager_id) values
("Mark", "Vincent",20,null),
("Bruce","W",18,null),
("Emily", "Parker",19,null),
("Riley","Campbell",2,1),
("Adam","Eves",1,2),
("Santa","Claus",5,null),
("Jeff","Jarret",6,null),
("Mike","Winer",7,null),
("Henrika","Smith",8,null),
("Wayne","Commons",17,1),
("julie","Sanchez",11,13),
("Chris","Pratt",11,13),
("Eric","Cougan",13,2),
("Derek","Fisher",15,4);