import React from 'react';

import ConsultationsPrices from '../../data/services/serviceConsultationPriceList.json';
import ExaminationPrices from '../../data/services/serviceExaminationPriceList.json';
import OtherPrices from '../../data/services/serviceOtherPriceList.json';

const ServiceInsidePriceLists = () => {
    return (
        <div id="price-list" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="title">
                    <h2 className="hr">Price list</h2>
                </div>

                <div className="price-list">
                    <div className="price-list-items">
                        <div className="price-list-item">
                            <div className="price-list-item-title">
                                <h3>Examination</h3>
                            </div>

                            <ul className="price-list-item-list-group list-group">
                                { ConsultationsPrices && ConsultationsPrices.map( ( consultation, key ) => {
                                    return (
                                        <li key={ key } className="list-group-item d-flex justify-content-between align-items-center">
                                            <span className="list-group-title">{ consultation.title }</span>
                                            <span className="list-group-price">{ consultation.price }</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="price-list-item">
                            <div className="price-list-item-title">
                                <h3>Examination</h3>
                            </div>

                            <ul className="price-list-item-list-group list-group">
                                { ExaminationPrices && ExaminationPrices.map( ( examination, key ) => {
                                    return (
                                        <li key={ key } className="list-group-item d-flex justify-content-between align-items-center">
                                            <span className="list-group-title">{ examination.title }</span>
                                            <span className="list-group-price">{ examination.price }</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="price-list-item">
                            <div className="price-list-item-title">
                                <h3>Other services</h3>
                            </div>

                            <ul className="price-list-item-list-group list-group">
                                { OtherPrices && OtherPrices.map( ( other, key ) => {
                                    return (
                                        <li key={ key } className="list-group-item d-flex justify-content-between align-items-center">
                                            <span className="list-group-title">{ other.title }</span>
                                            <span className="list-group-price">{ other.price }</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceInsidePriceLists;