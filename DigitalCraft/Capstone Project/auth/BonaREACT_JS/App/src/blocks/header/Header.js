import React from 'react';
import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchModal from '../../components/modal/SearchModal';
import MenuModal from '../../components/modal/MenuModal';
import Actions from "../actions/Actions";

const Header = ( { logoColor } ) => {
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
                            <SearchModal />

                            <MenuModal />
                        </div>

                        <Actions />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
