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
        choices:["Add","View","Update Employee", "Exit"]
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
            case "Exit":
                connection.end()
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
        message:"What do you want to view",
        choices:["Department","Role","Employee","Back to Main"]
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
            case "Back to Main":
                start()
                break;
        }
            
    })
    console.log("viewoptions")
}

async function viewDepartment(){
    await connection.query("Select * From Department", function(err,res){
        if (err) throw err;
        console.table(res);
    })
    await start()
}

async function viewRole(){
    await connection.query("Select * From Role", function(err,res){
        if (err) throw err;
        console.table(res);
    })
    await start()
}

async function viewEmployee(){
    await connection.query("Select * From Employee", function(err,res){
        if (err) throw err;
        console.table(res);
    })
    await start()
}

async function updateoemployee(){
    console.log("updateemployee")
    start()
}

start()