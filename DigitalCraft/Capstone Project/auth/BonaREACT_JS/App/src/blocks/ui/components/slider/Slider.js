import React, { Component } from 'react';
import Swiper from 'swiper';
import MoreExamples from '../../blocks/MoreExamples';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';

class Slider extends Component {

    componentDidMount() {

        new Swiper( '#slides-only .swiper-container', {
            // ADV swiper
            noSwipingClass: 'swiper-no-swiping',
            containerModifierClass: 'swiper-container-',
            slideClass: 'swiper-slide',
            slideBlankClass: 'swiper-slide-invisible-blank',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'adv-swiper-slide-next',
            slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
            slidePrevClass: 'adv-swiper-slide-prev',
            slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
            freeMode: false
        } );
        new Swiper( '#with-controls .swiper-container', {
            // ADV swiper
            noSwipingClass: 'swiper-no-swiping',
            containerModifierClass: 'swiper-container-',
            slideClass: 'swiper-slide',
            slideBlankClass: 'swiper-slide-invisible-blank',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: '-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
            freeMode: false,
            navigation: {
                nextEl: '.adv-swiper-button-next',
                prevEl: '.adv-swiper-button-prev'
            }
        } );
    }

    render() {
        return (
            <div id="slider" className="spacer m-top-xl">
                <h3>Slider</h3>
                <p>A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>

                <div id="slider-examples">
                    <h4>Examples</h4>

                    <div id="slides-only">
                        <h5>Slides only</h5>
                        <p>Here’s a carousel with slides only.</p>

                        <div className="bd-example">
                            <div className="slider">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                                <title>First slide</title>
                                                <rect width="100%" height="100%"></rect>
                                                <text x="50%" y="50%" dy=".3em">First slide</text>
                                            </svg>
                                        </div>

                                        <div className="swiper-slide">
                                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                                <title>Second slide</title>
                                                <rect width="100%" height="100%"></rect>
                                                <text x="50%" y="50%" dy=".3em">Second slide</text>
                                            </svg>
                                        </div>

                                        <div className="swiper-slide">
                                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                                <title>Third slide</title>
                                                <rect width="100%" height="100%"></rect>
                                                <text x="50%" y="50%" dy=".3em">Third slide</text>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <PrismCode
                            code={ '' +
                            '<div className="slider">\n' +
                            '  <div className="swiper-container">\n' +
                            '    <div className="swiper-wrapper">\n' +
                            '      <div className="swiper-slide">First slide</div>\n' +
                            '      <div className="swiper-slide">Second slide</div>\n' +
                            '      <div className="swiper-slide">Third slide</div>\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '</div>'
                            }
                            language="html"
                            plugins={ ["line-numbers"] }
                        />
                    </div>

                    <div id="with-controls">
                        <h5>With controls</h5>
                        <p>Adding in the previous and next controls.</p>

                        <div className="bd-example">
                            <div className="slider">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                                <title>First slide</title>
                                                <rect width="100%" height="100%"></rect>
                                                <text x="50%" y="50%" dy=".3em">First slide</text>
                                            </svg>
                                        </div>

                                        <div className="swiper-slide">
                                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                                <title>Second slide</title>
                                                <rect width="100%" height="100%"></rect>
                                                <text x="50%" y="50%" dy=".3em">Second slide</text>
                                            </svg>
                                        </div>

                                        <div className="swiper-slide">
                                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                                <title>Third slide</title>
                                                <rect width="100%" height="100%"></rect>
                                                <text x="50%" y="50%" dy=".3em">Third slide</text>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="adv-swiper-button-next"></div>
                                    <div className="adv-swiper-button-prev"></div>
                                </div>
                            </div>
                        </div>
                        <PrismCode
                            code={ '<div className="slider">\n' +
                            '  <div className="swiper-container">\n' +
                            '    <div className="swiper-wrapper">\n' +
                            '      <div className="swiper-slide">First slide</div>\n' +
                            '      <div className="swiper-slide">Second slide</div>\n' +
                            '      <div className="swiper-slide">Third slide</div>\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div className="adv-swiper-button-next"></div>\n' +
                            '  <div className="adv-swiper-button-prev"></div>\n' +
                            '</div>'
                            }
                            language="html"
                            plugins={ ["line-numbers"] }
                        />
                    </div>
                </div>

                <MoreExamples actionLink="https://swiperjs.com/demos/"
                              actionLinkContent="Swiper documentation"
                              contentBefore="For more examples and demo data, click "
                              contentAfter="."
                />
            </div>
        );
    }
}

export default Slider;
