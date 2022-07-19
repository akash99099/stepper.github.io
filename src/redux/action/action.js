import { ADD_EMPLOYEE_DATA, DELETE_EMPLOYEE_DATA, } from "./actiontype"


export const addEmployeeData = (adddata) => {
    return{
        type:ADD_EMPLOYEE_DATA,
        payload:adddata
    }
}


export const deleteEmployeeData = (id) => {
    return{
        type:DELETE_EMPLOYEE_DATA,
        payload:id,
    }
}