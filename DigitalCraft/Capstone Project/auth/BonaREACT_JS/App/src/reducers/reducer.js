import actionTypes from '../actions/actionTypes';

const initialState = {
    authenticated: "",
    users: [],
   
}

const reducerTemplate = (state = initialState, action) => {

    switch(action.type){
        
        case "AUTH_USER":
            return {
                ...state, 
                authenticated: action.data  //the jwt
            }

        case "FETCHED_USERS":
            return {
                ...state,
                users: [...action.data],
            };
        default:
            return state;
    } 
}


export default reducerTemplate