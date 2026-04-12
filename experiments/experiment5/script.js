let employees = [];

// ADD EMPLOYEE
function addEmployee() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let salary = parseFloat(document.getElementById("salary").value);
  let dept = document.getElementById("dept").value;

  let emp = {
    name: name,
    id: id,
    salary: salary,
    dept: dept
  };

  employees.push(emp);
  alert("Employee Added");
}

// DISPLAY ALL
function displayEmployees() {
  let output = "";
  for (let emp of employees) {
    output += `Name: ${emp.name}, ID: ${emp.id}, Salary: ₹${emp.salary}, Dept: ${emp.dept} <br>`;
  }
  document.getElementById("output").innerHTML = output;
}

// FILTER SALARY > 50000
function filterSalary() {
  let filtered = employees.filter(emp => emp.salary > 50000);

  let output = "";
  for (let emp of filtered) {
    output += `${emp.name} - ₹${emp.salary} <br>`;
  }
  document.getElementById("output").innerHTML = output;
}

// TOTAL SALARY
function totalSalary() {
  let total = 0;
  for (let emp of employees) {
    total += emp.salary;
  }
  document.getElementById("output").innerHTML = "Total Salary: ₹" + total;
}

// AVERAGE SALARY
function avgSalary() {
  let total = 0;
  for (let emp of employees) {
    total += emp.salary;
  }
  let avg = employees.length ? total / employees.length : 0;
  document.getElementById("output").innerHTML = "Average Salary: ₹" + avg;
}

// COUNT BY DEPARTMENT
function countDept() {
  let deptName = prompt("Enter Department Name:");
  let count = 0;

  for (let emp of employees) {
    if (emp.dept.toLowerCase() === deptName.toLowerCase()) {
      count++;
    }
  }

  document.getElementById("output").innerHTML =
    "Employees in " + deptName + ": " + count;
}