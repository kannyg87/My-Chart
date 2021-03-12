import React, { Fragment, useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import { fetchUserByToken } from '../actions';

import PageTitleCommon from '../blocks/page-title/PageTitleCommon';
import ContactForm from '../components/form/ContactForm';

import GoogleMaps from '../blocks/google-maps/GoogleMaps';
import ContactsInside from '../blocks/contacts/ContactsInside';
import TogatherImg from '../blocks/dashbord/happy_together_alert.png';
import {Img} from '../blocks/dashbord/dashbordStyles';
import DashboardPatientRecord from '../blocks/dashbord/dashbordPatientRecord'

const PatientDashboard = (props) => {
    document.body.className = "";
    document.body.classList.add( 'page' );

    const dispatch = useDispatch();
    const { push } = useHistory();
    const [loading, setLoading] = useState(true);

    const checkForAuthenticatedUser = () => {
        if (loading) return;

        if (props.auth && props.auth.role !== 'patient') {
            push('/');
        }
    };

    const callback = () => {
        setLoading(false);
    };

    useEffect(
        () => {
            checkForAuthenticatedUser();
            const token = localStorage.getItem('token');

            if (token) {
                dispatch(fetchUserByToken(token, callback));
            } else {
                push('/');
            }
        },
        [],
    );

    useEffect(
        () => {
            checkForAuthenticatedUser();
        },
        [props.auth],
    );
    const styleObj = {
        fontSize: 40,
        color: "#4a5403",
        textAlign: "center",
        }


    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Patient's Dashboard | Bona - Health & Medical</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header logoColor="dark" />

            <main id="main" className="site-main">
                <PageTitleCommon title="Patient's Dashboard" />
                <br />
                <br />
                
                <div style={styleObj}> Bring Your Health Information Together </div>

                <div class="row mt-5">
                    <div class=" offset-1 col-9">
                    <h1>Health Record:</h1>
                    <br/><DashboardPatientRecord user={props.auth} />
                    </div>
                </div>

                <div class= "mt-5">
                    <Img src={TogatherImg} alt="BigCo Inc. logo"/>
                </div>



                <section id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div className="clearfix">
                                <GoogleMaps />

                                <div className="spacer p-top-xl">
                                    <div className="title">
                                        <h2>Let’s talk or book now</h2>
                                    </div>

                                    <div className="row gutter-width-sm with-pb-xl spacer p-top-lg">
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                            <ContactsInside />
                                        </div>

                                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                            <div className="contact-form-shortcode">
                                                <ContactForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </Fragment>
    );
};

const mapStateToProps = (state) => {
        
    return{
        auth: state.auth.authenticated
    }
}

export default connect(mapStateToProps, null)(PatientDashboard);
