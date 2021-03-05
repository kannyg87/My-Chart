import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleCommon from '../blocks/page-title/PageTitleCommon';
import AboutReviews from '../blocks/about/AboutReviews';
import AboutImg from '../blocks/about/AboutImg';
import AboutUs from '../blocks/about/AboutUs';
import AboutOurDoctors from '../blocks/about/AboutOurDoctors';
import AboutContactUs from '../blocks/about/AboutContactUs';

const About = () => {
    document.body.classList.add( 'page' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>About us | Bona - Health & Medical React JS Template</title>

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
                <PageTitleCommon title="About us" />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="content">
                        <div className="clearfix">
                            <AboutImg />

                            <AboutUs />

                            <AboutOurDoctors />

                            <AboutReviews />

                            <AboutContactUs />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default About;
