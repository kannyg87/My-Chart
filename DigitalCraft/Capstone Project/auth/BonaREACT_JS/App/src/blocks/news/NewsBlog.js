import React from 'react';

import NewsItemsData from '../../data/news/newsItems.json';

const NewsBlog = () => {
    return (
        <div className="row gutter-width-sm with-pb-lg">
            { NewsItemsData && NewsItemsData.map( ( item, key ) => {
                return (
                    <div key={ key } className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
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
                                    <a title={ item.cardTitle } href={ process.env.PUBLIC_URL + item.link }>{ item.cardTitle }</a>
                                </h4>

                                <p className="card-text">{ item.description }</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default NewsBlog;