class Questions{
    get mainMenu(){
        let choices = ["View All Employees",
        "View Departments",
        "View Roles",
        "Update Employee Role",
        "View employees by Manager",
        "Add an Employee",
        "Add a Department",
        "Add a Role",
        "Quit"];
        return {
            type:"list",
            message:"Main Menu:",
            choices: choices,
            name:"choice",
            pageSize: choices.length 
        };
    }
    get addDepartment(){
        return {
            type: "input",
            message: "Add a department name.",
            name:"Department"
        };
    }
    get addRole(){
        return [{
            type: "input",
            message: "Enter a title for this role.",
            name:"Title"
        },
        {
            type:"number",
            message:"Enter a salary for this role.",
            name:"Salary"
        },
        {
            type:"list",
            message:"Enter the department this role belongs to.",
            name:"Department",
            choices:[]
        }];
    }
    get addEmployee(){
        return [{
            type: "input",
            message: "Enter the first name of the employee.",
            name:"first_name"
        },
        {
            type:"input",
            message:"Enter the last name of the employee.",
            name:"last_name"
        },
        {
            type:"list",
            message:"Enter the role of this employee.",
            name:"role",
            choices:[]
        },
        {
            type:"list",
            message: "Enter the manager for this employee.",
            name:"manager",
            choices:[]
        }];
    }
    get deleteEmployee(){
        return {
            type: "list",
            message: "Select the employee you would like to remove.",
            choices:[],
            name:"employee"
        };
    }
    get deleteRole(){
        return {
            type: "list",
            message: "Select the role you would like to remove.",
            choices:[],
            name:"role"
        };
    }
    get deleteDepartment(){
        return {
            type: "list",
            message: "Select the department you would like to remove.",
            choices:[],
            name:"department"
        };
    }
    get updateEmployeeRole(){
        return [{
            type: "list",
            message: "Select the employee you would like to update.",
            choices:[],
            name:"employee"
        },
        {
            type:"list",
            message:"Choose a new role for this employee.",
            choices:[],
            name:"role"
        }];
    }
    get confirmInput(){
        return {
            type: "confirm",
            message: "",
            name:"Please Confirm"
        }
    }
}

module.exports = Questions;

