
import actionTypes from './actionTypes';
export const addRecord = (record) => {

    return {
        type: "ADD_RECORD",
        data: record
    }
}

//product should be unique id
export const deleteRecord = (record) => {

    return {
        type: "DELETE_RECORD",
        data: record
    }
}