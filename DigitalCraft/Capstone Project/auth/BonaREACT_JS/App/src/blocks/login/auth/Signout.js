import React from "react";
import {useDispatch} from 'react-redux';
import {signout} from '../../../actions/index';
import {useHistory} from 'react-router-dom'

const Signout = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    
      dispatch(signout(()=>{
        console.log('pushing to another page');
        history.push('/');
      }));
  }

  return <div style={{height: "100vh"}} className="d-flex flex-column justify-content-center align-items-center">
  

  <h3 className="text-white">Thanks For Visiting See You Next Time!</h3>
  <br />
  

  <button className="btn btn-info" onClick={logOut}>Sign Out</button>
 </div>
};

export default Signout;
