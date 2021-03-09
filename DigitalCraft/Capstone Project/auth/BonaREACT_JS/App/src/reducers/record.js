
import actionTypes from '../actions/actionTypes';
import {v1 as uuidv1} from "uuid"


const initialState ={
    
    records:[
        {
        id: uuidv1(),
        testResults:"text",
        immunization :"1",
        medications:"text",
        notes:"notes",
        }
            ]
};
const record = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_RECORD":
            return{
                ...state,
                records: [...state.records, action.data] 
            } 
            case 'DELETE_RECORD':
                let filterRecord = state.records.filter(record => {
                    return record.id !== action.data.id
                })
                return {
                    ...state,
                    payments: filterRecord
                }  
            
        
        default:
            return state;
    }
}

export default record