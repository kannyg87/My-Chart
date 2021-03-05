import React, { Component } from 'react';
import Swiper from 'swiper';

import ServicesDataList from '../../data/services/servicesHomeItems.json';

class ServicesHome extends Component {
    componentDidMount() {
        new Swiper( '.adv-slider-services .adv-swiper-container', {
            // ADV swiper
            noSwipingClass: 'adv-swiper-no-swiping',
            containerModifierClass: 'adv-swiper-container-',
            slideClass: 'adv-swiper-slide',
            slideBlankClass: 'adv-swiper-slide-invisible-blank',
            slideActiveClass: 'adv-swiper-slide-active',
            slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
            slideVisibleClass: 'adv-swiper-slide-visible',
            slideDuplicateClass: 'adv-swiper-slide-duplicate',
            slideNextClass: 'adv-swiper-slide-next',
            slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
            slidePrevClass: 'adv-swiper-slide-prev',
            slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
            wrapperClass: 'adv-swiper-wrapper',
            navigation: {
                disabledClass: 'adv-swiper-button-disabled',
                hiddenClass: 'adv-swiper-button-hidden',
                lockClass: 'adv-swiper-button-lock',
                nextEl: '.adv-2-swiper-button-next',
                prevEl: '.adv-2-swiper-button-prev'
            },
            spaceBetween: 0,
            slidesPerView: 'auto'
        } );
    }

    render() {
        return (
            <section id="services" className="block spacer p-top-xl">
                <div className="adv-slider-services">
                    <div className="adv-swiper-container">
                        <div className="adv-swiper-wrapper services-items clearfix">
                            { ServicesDataList && ServicesDataList.map( ( service, key ) => {
                                return (
                                    <a key={ key } title={ service.title } className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + service.link }>
                                        <div className="services-item-content">
                                            <h3 className="services-item-t-head">{ service.title }</h3>
                                            <span className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space">Read more</span>
                                        </div>
        
                                        <div className="img object-fit">
                                            <div className="object-fit-cover">
                                                <img src={ service.imgLink } alt={ service.imgAlt } />
                                            </div>
                                        </div>
        
                                        <div className="img-bg-color"></div>
                                    </a>
                                );
                            })}
                        </div>

                        <div className="adv-2-swiper-button-prev">
                            <span>
                                <span className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto">Previous</span>
                            </span>
                        </div>

                        <div className="adv-2-swiper-button-next">
                            <span>
                                <span className="btn btn-lg btn-after-horbar btn-link border-0 p-0 min-w-auto">Next</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};

export default ServicesHome;
