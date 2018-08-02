const populateEmployeesMaps = (store, employeesMap, managersEmployeesMap) => {
  for (let i = 0; i < store.employees.length; i++) {
    const employeeObj = store.employees[i];

    // populate employeesMap for instant lookup by employee id
    employeesMap[employeeObj.id] = employeeObj;

    // populate managersEmployeeMap for lookup of all employees a manager manages
    if (!managersEmployeesMap[employeeObj.manager_id]) {
      managersEmployeesMap[employeeObj.manager_id] = [employeeObj.id];
    } else {
      managersEmployeesMap[employeeObj.manager_id].push(employeeObj.id);
    }
  }
};

module.exports = populateEmployeesMaps;