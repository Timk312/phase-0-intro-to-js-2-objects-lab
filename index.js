const employee ={}
    employee.name="Jim";
    employee.streetAddress="street21";



function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key]=value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = {...employee};
    delete newEmployee.key;
    newEmployee[key]=value;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    delete employee.key;
    employee[key]=value;
    return employee;
}