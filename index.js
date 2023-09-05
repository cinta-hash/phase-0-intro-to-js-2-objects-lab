// Write your solution in this file!
let employee = {
    name: "John",
    streetAddress: "Mbs road"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newInfo = {...employee};
    newInfo[key] = value;
    return newInfo;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let newUpdate = {...employee};
   delete newUpdate[key];
   return newUpdate;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}