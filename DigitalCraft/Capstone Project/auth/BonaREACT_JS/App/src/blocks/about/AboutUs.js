import React, { useState, useEffect } from 'react';


const AboutsUs = () => {
    const [ pageAbout, setPage ] = useState( false );

    useEffect(() => {
        window.location.pathname.includes("about-us") ? setPage( true ) : setPage( false );
    }, []);

    return (
        <div id="about-us" className={ "block  before-block spacer p-top-xl " + ( pageAbout ? "bg-gray-light p-bottom-xl" : " " ) }>
            <div className="wrapper">
                <div className="row gutter-width-sm with-pb-md">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="description-2">
                            <h2>Choose The Top Clinic For Yourself and Your Family</h2>
                        </div>

                        <div className="signature spacer m-top-lg">
                            <div className="signature-img">
                                <img src="assets/img/demo/33_img.png" alt="Signature" />
                            </div>

                            <div className="signature-content">
                                <h5 className="signature-name">Tom Henders</h5>
                                <p className="signature-position">CEO of Company</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="description-2">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since.</p>
                        </div>

                        <div className="description-2 spacer p-top-lg">
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>

                <div className="icon-list">
                    <div className="icon-list-items">
                        <div className="icon-list-item">
                            <p><span className="d-flex"><i className="fas fa-check"></i><span>Constant Improvement</span></span></p>
                        </div>

                        <div className="icon-list-item">
                            <p><span className="d-flex"><i className="fas fa-check"></i><span>Commitment to Customers</span></span></p>
                        </div>

                        <div className="icon-list-item">
                            <p><span className="d-flex"><i className="fas fa-check"></i><span>Best Quality You Can Get</span></span></p>
                        </div>

                        <div className="icon-list-item">
                            <p><span className="d-flex"><i className="fas fa-check"></i><span>More than 30 available services</span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutsUs;

