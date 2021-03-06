import React, { Fragment } from 'react';
import Loading from '../blocks/loading/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../blocks/footer/Footer';
import Signup from "../blocks/login/auth/signup";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    
  return (
    <>
      <Fragment>
    <Loading />  

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">My-Chart</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/signup">Register</Nav.Link>
      <Nav.Link href="/signin">Login</Nav.Link>
      <Nav.Link href="/signout">Logout</Nav.Link>
      
    </Nav>
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
