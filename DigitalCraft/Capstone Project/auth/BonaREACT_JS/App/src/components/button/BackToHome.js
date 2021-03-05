import React from 'react';

const BackToHome = () => {
    return (
        <div className="button">
            <a title="Back to Home" className="btn btn-primary" href={ process.env.PUBLIC_URL + "/" }>Back to Home</a>
        </div>
    );
};

export default BackToHome;
