import React from 'react';
import HeaderLogo from '../../blocks/logo/HeaderLogo';

const HeaderUI = ( { logoColor } ) => {
    return (
        <header id="header" className="site-header">
            <div className="wrapper">
                <div className="header-content d-flex justify-content-between">
                    <div className="header-left align-self-center"></div>

                    <div className="header-center align-self-center">
                        <HeaderLogo logoColor={ logoColor } />
                    </div>

                    <div className="header-right d-flex justify-content-end"></div>
                </div>
            </div>
        </header>
    );
};

export default HeaderUI;
