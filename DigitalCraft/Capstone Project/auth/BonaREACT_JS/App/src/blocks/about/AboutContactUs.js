import React from 'react';

const AboutContactUser = () => {
    return (
        <div id="contact-us" className="block spacer p-top-xl">
            <div className="bg-gray-light contact-us-bottom-no-space spacer p-top-xl p-bottom-xl">
                <div className="wrapper text-center">
                    <div className="title">
                        <h2>Let’s talk or book now</h2>
                    </div>

                    <a href={ process.env.PUBLIC_URL + "/contacts" } className="btn btn-primary">Book Now</a>
                </div>
            </div>
        </div>
    );
};

export default AboutContactUser;