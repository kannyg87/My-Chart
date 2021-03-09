import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import HeaderLogo from '../../blocks/logo/HeaderLogo';
import {signout} from '../../actions/index';

const Header = ( { logoColor, auth } ) => {
    const { push } = useHistory();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(signout(()=>{
            console.log('pushing to another page');
            push('/');
        }));
    }

    return (
        <header id="header" className="site-header">
            <div className="wrapper">
                <div className="header-content d-flex justify-content-between">
                    <div className="header-left align-self-center">
                        <div className="links">
                            <div className="links-items">
                                {/* <div className="links-item">
                                    <a href={ process.env.PUBLIC_URL + "/services" } className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto">Services</a>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="header-center align-self-center">
                        <HeaderLogo logoColor={ logoColor } />
                    </div>

                    <div className="header-right d-flex justify-content-end">
                        <div className="d-flex align-items-center">
                            {
                                !auth && (
                                    <div className="search-toggle">
                                        <button onClick={() => push('/signin')} type="button" className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto">Sign In</button>
                                    </div>
                                )
                            }

                            {
                                auth && auth.role === 'admin' && (
                                    <div className="search-toggle">
                                        <button onClick={() => push('/admin-dashboard')} type="button" className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto">My Dashboard</button>
                                    </div>
                                )
                            }

                            {
                                auth && auth.role === 'patient' && (
                                    <div className="search-toggle">
                                        <button onClick={() => push('/patient-dashboard')} type="button" className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto">My Dashboard</button>
                                    </div>
                                )
                            }

                            {
                                auth && (
                                    <div className="search-toggle">
                                        <button onClick={() => logOut()} type="button" className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto">Sign Out</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
        
    return{
        auth: state.auth.authenticated
    }
}

export default connect(mapStateToProps, null)(Header);
