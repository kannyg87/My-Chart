import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import { connect, useDispatch } from 'react-redux';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import { fetchUserByToken } from '../actions';

import PageTitleHome from '../blocks/page-title/PageTitleHome';

const Home = ({ auth }) => {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'header-absolute-true' );
    const dispatch = useDispatch();

    useEffect(
        () => {
            const token = localStorage.getItem('token');

            if (token) {
                dispatch(fetchUserByToken(token, () => true));
            }
        },
        [],
    );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home | Bona - Health & Medical React JS Template</title>

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

            <Header logoColor="light" />

            <main id="main" className="site-main content-no-spacing">
                <div className="content">
                    <div className="clearfix">
                        <PageTitleHome />
                    </div>
                </div>
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

export default connect(mapStateToProps, null)(Home);
