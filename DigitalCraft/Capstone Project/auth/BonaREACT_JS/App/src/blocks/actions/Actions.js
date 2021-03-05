import React from 'react';

const Actions = () => {
    return (
        <div className="actions">
            <div className="actions-items">
                <a className="actions-item" href={ process.env.PUBLIC_URL + "/contacts" }>
                    <span>Reservation</span>
                </a>
            </div>
        </div>
    );
};

export default Actions;
