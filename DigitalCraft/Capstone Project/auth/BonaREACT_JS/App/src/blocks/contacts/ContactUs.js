import React from 'react';

const ContactsUs = () => {
    return (
        <section id="contact-us" className="block">
            <div className="bg-blue text-tertiary spacer p-top-xl p-bottom-xl">
                <div className="wrapper text-center">
                    <div className="title">
                        <h2 className="text-uppercase">You can contact us</h2>
                    </div>

                    <a href={ process.env.PUBLIC_URL + "/contacts" } className="btn btn-outline-tertiary text-uppercase">Contact</a>
                </div>
            </div>
        </section>
    );
};

export default ContactsUs;
