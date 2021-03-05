import React from 'react';

const ModalMenuLanguages = () => {
    return (
        <nav className="languages">
            <ul className="nav">
                <li className="lang-item current-lang">
                    <a title="EN" href={ process.env.PUBLIC_URL + "/" }>En</a>
                </li>
            </ul>
        </nav>
    );
};

export default ModalMenuLanguages;
