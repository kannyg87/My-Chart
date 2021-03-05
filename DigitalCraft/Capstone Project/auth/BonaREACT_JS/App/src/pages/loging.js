import React, { Fragment } from 'react';
import Loading from '../blocks/loading/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../blocks/footer/Footer';
import Signup from "../blocks/login/auth/signup";
import { Navbar, Nav } from 'react-bootstrap';

const SignUp = () => {
    
  return (
    <>
      <Fragment>
    <Loading />                        
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
        <Navbar.Brand>My-Chart</Navbar.Brand>   
                <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto">
                    {/* <Nav className="ml-auto">
                    <Nav.Link herf="/signin" > log in </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
        </Navbar>

        <div className="outer">
            <div className="inner">
                <Signup /> 
            </div>
        </div>
        </Fragment>
        <Footer />
        
    </>
  )
}

export default SignUp;
