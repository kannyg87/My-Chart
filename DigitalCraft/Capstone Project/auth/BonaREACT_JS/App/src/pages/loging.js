import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Loading from '../blocks/loading/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import Signup from "../blocks/login/auth/signup";

//import PageTitleCommon from '../blocks/page-title/PageTitleCommon';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const SignUp = () => {
  document.body.className = "";
  document.body.classList.add( 'page' );
    
  return (
    <>
      <Fragment>
      <MetaTags>
                <meta charSet="UTF-8" />
                <title>My Dashboard | Bona - Health & Medical </title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>
    <Loading /> 
    <Header logoColor="dark" /> 

    {/* <Navbar collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand href="#home"></Navbar.Brand>
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
</Navbar>  */}

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
