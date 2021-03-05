import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleCommon from '../blocks/page-title/PageTitleCommon';
import NewsBlog from '../blocks/news/NewsBlog';

import Widget from '../blocks/widget/Widget';
import LoadMoreButton from '../components/loadmore/LoadMore';

const News = () => {
    document.body.classList.add( 'blog' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>News | Bona - Health & Medical React JS Template</title>

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
                <PageTitleCommon title="News" />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="blog">
                                <div className="row gutter-width-sm">
                                    <div className="col-xl-8 col-lg-8 col-md-12">

                                        <NewsBlog />

                                        <LoadMoreButton />
                                    </div> 

                                    <div className="col-xl-4 col-lg-4 col-md-12">
                                        <Widget />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default News;
