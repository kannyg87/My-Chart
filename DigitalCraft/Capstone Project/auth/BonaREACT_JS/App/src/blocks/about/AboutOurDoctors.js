import React from 'react';

import DoctorsList from '../../data/about/doctorsList.json';

const AboutOurDoctors = () => {
    return (
        <div id="our-doctors" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="title">
                    <h2 className="hr">Our Doctors</h2>
                </div>

                <div className="row gutter-width-sm with-pb-md">
                    { DoctorsList && DoctorsList.map( ( doctor, key ) => {
                        return (
                            <div key={ key } className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div className="team-member">
                                    <div className="team-member-top">
                                        <div className="img object-fit">
                                            <div className="object-fit-cover">
                                                <img src={ doctor.image } alt={ doctor.name } /> 
                                            </div>
                                        </div>
        
                                        <div className="team-member-position">
                                            <p>{ doctor.position }</p>
                                        </div>
                                    </div>
        
                                    <div className="team-member-content">
                                        <h4 className="team-member-t-head">{ doctor.name }</h4>
        
                                        <div className="team-member-description">
                                        <p>{ doctor.description }</p>
                                        </div>
                                    </div>
        
                                    <nav className="team-member-nav-items">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a title="Facebook" href={ doctor.FbLink }><i className="fab fa-facebook-f"></i></a>
                                            </li>
        
                                            <li className="nav-item">
                                                <a title="LinkedIn" href={ doctor.LiLink }><i className="fab fa-linkedin-in"></i></a>
                                            </li>
        
                                            <li className="nav-item">
                                                <a title="Instagram" href={ doctor.IgLink }><i className="fab fa-instagram"></i></a>
                                            </li>
        
                                            <li className="nav-item">
                                                <a title="Twitter" href={ doctor.TwLink }><i className="fab fa-twitter"></i></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        );
                    } ) }
                </div>
            </div>
        </div>
    );
};

export default AboutOurDoctors;
