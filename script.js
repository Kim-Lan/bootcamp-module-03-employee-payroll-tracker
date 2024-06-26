// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // Create employees array to return
  let employees = [];

  // Initialize done condition for while loop
  let done = false;
  while (!done) {

    // Prompt user for input
    let firstName = prompt('Enter first name:');
    let lastName = prompt('Enter last name:');
    let salaryInput = prompt('Enter salary:');

    // Check salary input; default to 0 if not a number
    let salary = 0;
    if (!isNaN(salaryInput)) { // if salary is a number
      salary = Number(salaryInput);
    }

    // Create employee object
    let newEmployee = {
      firstName,
      lastName,
      salary
    };

    // Add employee object to array
    employees.push(newEmployee);

    // Prompt user to continue or exit
    done = !confirm("Do you want to add another employee?");
  }

  // Return filled employees array
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Define variable for total number of employees
  const totalEmployees = employeesArray.length;

  // Get sum of all salaries
  let sumSalaries = 0;
  for (const employee of employeesArray) {
    sumSalaries += employee.salary;
  }

  // Calculate average salary
  const averageSalary = sumSalaries / totalEmployees;

  // Print to console
  console.log(`The average employee salary between our ${totalEmployees} employee(s) is \$${averageSalary.toFixed(2)}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Choose a random index from the employeesArray
  const chosenIndex = Math.floor(Math.random() * employeesArray.length);

  // Get the employee object at the chosen index
  const chosenEmployee = employeesArray[chosenIndex];

  // Print chosen employee name to console
  console.log(`Congratulations to ${chosenEmployee.firstName} ${chosenEmployee.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
