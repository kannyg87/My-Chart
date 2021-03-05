import React, { Component } from "react";
import Loading from '../../loading/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Footer from '../../footer/Footer';
import  '../../../assets/login/index.css';

export default class Login extends Component {
    render() {
        return ( <>
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

           <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>

            </div>
        </div>
        <Footer />
        </>
        );
    }
}