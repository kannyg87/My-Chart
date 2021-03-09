import React, {useState,Fragment} from "react";
import Loading from '../../loading/Loading';
import MetaTags from 'react-meta-tags';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav } from 'react-bootstrap';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import  '../../../assets/login/index.css';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signin} from '../../../actions/index';
import {useHistory} from 'react-router-dom';



const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password)
        dispatch(signin({
        email: email,
        password: password
        }, (authenticatedUser) => {
            console.log('pushing to another page');
            const { role } = authenticatedUser;

            if (role === 'admin')
                history.push('/admin-dashboard');
            else if (role === 'patient')
                history.push('/patient-dashboard');
            else
                history.push('/i-dont-exist');
        }))

    }
        return ( <>
        <Fragment>
         <MetaTags>
                <meta charSet="UTF-8" />
                <title>My Dashboard | Bona - Health & Medical ReactJS Template</title>

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
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            </Navbar>  */}
        
            <div className="outer container">
                <div className="inner">
                <form onSubmit={handleSubmit}  className="form">
                    <h3>Log in</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" value={email}
                            onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={password}
                            onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button> <br />
                    <p>Don't have an account? <Link to="/signup">Register Here</Link></p>
            </form>
            </div>
            </div>
        <Footer />
        </Fragment>
        </>
        );
    }
    export default Signin;