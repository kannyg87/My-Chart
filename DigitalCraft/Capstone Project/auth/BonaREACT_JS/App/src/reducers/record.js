
import actionTypes from '../actions/actionTypes';
import {v1 as uuidv1} from "uuid"
const initialState ={
    
    records:[
        {
        id: uuidv1(),
        testResults:"STREPTOCOCCUS, GROUP A CULTURE",
        immunization :"DTaP Dates on file: 12/20/2017, 08/23/2016, 04/06/2016",
        medications:"cetirizine PO SOLN 1 mg/mL Learn more Give 5 ml by mouth every day as needed for allergies. 2 refills before November 18, 2021",
        notes:`
        MICRO NUMBER: 91674388
        TEST STATUS: FINAL
        SPECIMEN SOURCE: THROAT
        SPECIMEN QUALITY: ADEQUATE
        RESULT: No group A Streptococcus isolated`,
        
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
                    console.log('recordId',record.id)
                    console.log('action',action.data.id)
                    return record.id !== action.data.id
                    
                })
                return {
                    ...state,
                    records: filterRecord
                }  
            
        
        default:
            return state;
    }
}

export default record