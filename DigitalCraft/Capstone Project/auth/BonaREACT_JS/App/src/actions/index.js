
import actionTypes from './actionTypes';
import axios from 'axios';

export const fetchUserByToken = (token, cb) => {
    return async dispatch => {
        try {
            let response = await axios.get('http://localhost:3001/user-from-token', {
                headers: {
                    authorization: token,
                },
            });

            dispatch({type: "AUTH_USER", data: response.data.user});
        } catch(error) {
            console.log(error);
        }
        cb();
    };
};

export const fetchUsers = (token, cb) => {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:3001/users', {
                headers: {
                    authorization: token,
                },
            });

            dispatch({ type: 'FETCHED_USERS', data: response.data.users });
        } catch (error) {
            console.log(error);
        }
        cb();
    };
};

export const deleteUser = (userId, cb) => {
    const token = localStorage.getItem('token');

    return async dispatch => {
        try {
            await axios.delete(`http://localhost:3001/user?userId=${userId}`, {
                headers: {
                    authorization: token,
                },
            });

            const response = await axios.get('http://localhost:3001/users', {
                headers: {
                    authorization: token,
                },
            });

            dispatch({ type: 'FETCHED_USERS', data: response.data.users });
        } catch (error) {
            console.log(error);
        }
        cb();
    };
};

export const signUp = (formData, cb) => {
    
    console.log(formData);
    //take username and passpword
    //call our server api 
    //wait for an authenticated token 
    //call reducer to store token

    //formData => {email, password}
    
    return async dispatch=>{
        
        try{
            let response = await axios.post('http://localhost:3001/signup', formData) //formdata will put on header

            console.log(response.data.token);//token

            //dispatch action to reducer 

            dispatch({type: "AUTH_USER", data: response.data.token});

            localStorage.setItem('token', response.data.token);

            cb();

        }
        catch(e){
            console.log('error');
            console.log(e);
        }
    }
}

//logging into application

export const signin = (formData, cb) => {
    
    return async dispatch =>{

        try{
            let response = await axios.post('http://localhost:3001/signin', formData);

            dispatch({type: "AUTH_USER", data: response.data.user});

            console.log('signin', response.data);
            localStorage.setItem('token', response.data.token);

            cb(response.data.user);
        }
        catch(e){

        }
    }
}

//logout

export const signout = (cb) => {

    return dispatch=> {
        localStorage.removeItem('token');
        dispatch({
            type: "AUTH_USER",
            data: ''
        })

        console.log('signing out');

        cb();
    }
    
}
