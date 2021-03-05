import React from 'react';
import { withRouter } from 'react-router-dom';

const ModalMenuPrimary = ( props ) => {
    return (
        <nav className="menu-primary">
            <ul className="nav">
                <li className={"nav-item " + ( props.location.pathname ===  window.location.pathname && props.location.pathname === process.env.PUBLIC_URL + "/"  ? "current-nav-item" : "" ) }>
                    <a title="Home" href={ process.env.PUBLIC_URL + "/" }>Home</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/about-us" ) ? "current-nav-item" : "" ) }>
                    <a title="About us" href={ process.env.PUBLIC_URL + "/about-us" }>About us</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/services" ) || window.location.pathname.includes( "/service-inside" ) ? "current-nav-item" : "" ) }>
                    <a title="Services" href={ process.env.PUBLIC_URL + "/services" }>Services</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/about-us" ) ? "current-nav-item" : "" ) }>
                    <a title="Gallery" href={ process.env.PUBLIC_URL + "/gallery" }>Gallery</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/about-us" ) || window.location.pathname.includes( "/news-inside" ) ? "current-nav-item" : "" ) }>
                    <a title="News" href={ process.env.PUBLIC_URL + "/news" }>News</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/about-us" ) ? "current-nav-item" : "" ) }>
                    <a title="Contacts" href={ process.env.PUBLIC_URL + "/contacts" }>Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

export default withRouter(ModalMenuPrimary);
