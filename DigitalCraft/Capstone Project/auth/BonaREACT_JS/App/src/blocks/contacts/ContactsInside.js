import React from 'react';

const ContactsInside = () => {
    return (
        <div className="contacts">
            <div className="contacts-items">
                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p><a href="mailto:company@domain.com">company@domain.com</a></p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Email</h6>
                    </div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p>36 M St, New York, 152, USA</p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Address</h6>
                    </div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p><a href="tel:005053255350539">0050 (5325) 535-0539</a></p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Phone</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsInside;
