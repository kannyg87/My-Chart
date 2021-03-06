import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../../assets/login/index.css';
//import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signUp} from '../../../actions/index';

import {useHistory} from 'react-router-dom'

const Signup = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

      // call action
      //pass the email address and password to our action
      //dispatch(sinup(), cb)

    dispatch(signUp({
        email: email,
        password: password
        }, ()=>{
        console.log('pushing to another page');
        history.push('/feature');
        }))
    }
        return (<>
            <form onSubmit={handleSubmit} className="form">
                <h3>Register</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/signin">log in?</a>
                </p>
            </form>
            
            </>
        );
    }

    export default Signup;
