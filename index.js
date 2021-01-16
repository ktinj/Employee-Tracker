// require inquirer, etc...
const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

init();

// main menu (starting point)
function init() {
    const logoText = logo({ name: "Employee Tracker" }).render();
    console.log(logoText);

    loadMainPrompts();
}
async function loadMainPrompts() {
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices [
                {
                    name: "View all employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View all employees by department",
                    value: "VIEW_EMPLOYEES_BY DEPARTMENT"
                },
            ]
        }
    ])
}
    // ask
        // add 
        // view
        // update

// function ADD
// function VIEW
async function viewEmployees() {
    const employees = await db.findAllEmployees();
    console.log("\n");
    console.table(employees);
}
// fuction UPDATE