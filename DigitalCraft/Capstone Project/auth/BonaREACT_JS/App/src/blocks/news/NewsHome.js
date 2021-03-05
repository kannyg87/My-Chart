import React from 'react';

import NewsHomeItemsData from '../../data/news/newsHomeItems';

const NewsHome = () => {
    return (
        <section id="news" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="title">
                    <h2 className="hr">News</h2>
                </div>

                <div className="row gutter-width-sm with-pb-lg">
                    { NewsHomeItemsData && NewsHomeItemsData.map( ( item, key ) => {
                        return (
                            <div key={ key } className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="card card-post">
                                    <div className="card-top position-relative">
                                        <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>
                                            <div className="img object-fit overflow-hidden">
                                                <div className="object-fit-cover transform-scale-h">
                                                    <img className="card-top-img" src={ item.imgLink } alt={ item.imgAlt } />
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="card-body">
                                        <div className="card-meta">
                                            <p>
                                                <span><a className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space" href={ process.env.PUBLIC_URL + item.categoryLink }>{ item.categoryTitle }</a></span>
                                            </p>
                                        </div>

                                        <h4 className="card-title">
                                            <a title={ item.cardTitle } href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a>
                                        </h4>

                                        <p className="card-text">{ item.description }</p>
                                    </div>
                                </div>
                            </div>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
};

export default NewsHome;
