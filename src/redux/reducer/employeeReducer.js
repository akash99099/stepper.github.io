import { ADD_EMPLOYEE_DATA, DELETE_EMPLOYEE_DATA } from "../action/actiontype";

export const intialState = [];

const employeeReducer = (state=intialState,action) => {
    switch(action.type){
        case ADD_EMPLOYEE_DATA:
            return [...state,action.payload];
        case DELETE_EMPLOYEE_DATA:
            let deleteData = [...state]
            return deleteData.filter((item)=>item.id !== action.payload);
        default:
            return state;
    }
}

export default employeeReducer