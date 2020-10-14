const inquirer=require("inquirer");
const mysql=require("mysql");
require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_tracker"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

function start(){
    inquirer.prompt({
        name:"start",
        type:"list",
        message:"What do you want to do?",
        choices:["Add","View","Update Employee"]
    }).then(function (answer){
        switch (answer.start){
            case "Add":
                addoptions()
                break;
            case "View":
                viewoptions()
                break;
            case "Update Employee":
                updateoemployee()
                break;
        }
    }
    )
}
//add functions
async function addoptions(){
    inquirer.prompt({
        name:"types",
        type:"list",
        message:"What do you want to add",
        choices:["Department","Role","Employee"]
    }).then(function(answer){
        switch(answer.types){
            case "Department":
                addDepartment()
                break;
            case "Role":
                addRole()
                break;
            case "Employee":
                addEmployee()
                break;
        }
            
    })
    console.log("addoptions")
}


async function addDepartment(){
    console.log("adddepartment")
    start()
}

async function addRole(){
    console.log("addRole")
    start()
}

async function addEmployee(){
    console.log("addEmployee")
    start()
}




//view functions
async function viewoptions(){
    inquirer.prompt({
        name:"types",
        type:"list",
        message:"What do you want to add",
        choices:["Department","Role","Employee"]
    }).then(function(answer){
        switch(answer.types){
            case "Department":
                viewDepartment()
                break;
            case "Role":
                viewRole()
                break;
            case "Employee":
                viewEmployee()
                break;
        }
            
    })
    console.log("viewoptions")
}

async function viewDepartment(){
    console.log("viewDepartment")
    start()
}

async function viewRole(){
    console.log("viewRole")
    start()
}

async function viewEmployee(){
    console.log("viewemployee")
    start()
}

async function updateoemployee(){
    console.log("updateemployee")
    start()
}

start()