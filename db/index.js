const connection = require ("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id",
        ):
    }

    findAllPossibleManagers(employeeId) {
        return this.connection.query(
            "SELECT id, first_name, last_name FROM employee WHERE id != ?", employeeId);
    }

    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee set ?", employee);
    }

    removeEmployee(employeeID) {
        return this.connection.query("DELETE FROM employee WHERE id = ?", employeeId);
    }
}

module.exports = new DB(connection);