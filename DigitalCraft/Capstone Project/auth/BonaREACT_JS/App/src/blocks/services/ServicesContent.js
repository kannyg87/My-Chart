import React from 'react';

import ServicesContentItemsData from '../../data/services/servicesContentItems';

const ServicesContent = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="row gutter-width-sm with-pb-sm services-items">
                    { ServicesContentItemsData && ServicesContentItemsData.map( ( item, key ) => {
                        return (
                            <div key={ key } className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <a title={ item.title } className="services-item" href={ process.env.PUBLIC_URL + item.link }>
                                    <div className="services-item-content">
                                        <h3 className="services-item-t-head">{ item.title }</h3>

                                        <span className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space">Read more</span>
                                    </div>

                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src={ item.imgSrc } alt={ item.title } />
                                        </div>
                                    </div>

                                    <div className="img-bg-color"></div>
                                </a>
                            </div>
                        );
                    } ) }
                </div>
            </div>
        </div>
    );
};

export default ServicesContent;
