import React from 'react';

const BackToServices = () => {
    return (
        <div id="back-to-services" className="block spacer p-top-xl">
            <div className="text-center">
                <a href={ process.env.PUBLIC_URL +  "/services" } className="btn btn-primary">Back to Services</a>
            </div>
        </div>
    );
};

export default BackToServices;
