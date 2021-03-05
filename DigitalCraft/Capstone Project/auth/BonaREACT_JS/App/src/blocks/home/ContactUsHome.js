import React from 'react';

const ContactUsHome = () => {
    return (
        <section id="contact-us" className="block spacer p-top-xl">
            <div className="bg-gray-light spacer p-top-xl p-bottom-xl contact-us-border-no">
                <div className="wrapper text-center">
                    <div className="title">
                        <h2>Let’s talk or book now</h2>
                    </div>

                    <a href={ process.env.PUBLIC_URL + "/contacts" } className="btn btn-primary">Book Now</a>
                </div>
            </div>
        </section>
    );
};

export default ContactUsHome;