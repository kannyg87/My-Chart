import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchForm from '../form/SearchForm';
import Actions from '../../blocks/actions/Actions';

class SearchModal extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false
        };

    };

    open = () => {
        this.setState( { showModal: true } );
    };

    close = () => {
        this.setState( { showModal: false } );
    };

    render() {
        return (
            <Fragment>
                <div className="search-toggle">
                    <button onClick={ this.open } type="button" className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto" data-toggle="modal" data-target="#search-modal">Search</button>
                </div>

                <Modal className="modal fade"
                       id="search-modal"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ false }
                       aria-labelledby="search-modal"
                       aria-hidden="true"
                       dialogClassName="modal-full"
                       tabIndex="-1" 
                       ref={ node => this.chart = node }>

                    <div className="wrapper" >
                        <div className="modal-content">
                            <div className="modal-header modal-header-top">
                                <div className="header-content d-flex justify-content-between w-100">
                                    <div className="header-left align-self-center">
                                        <div className="links">
                                            <div className="links-items">
                                                <div className="links-item">
                                                    <a href={ process.env.PUBLIC_URL + "/" } className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto">Services</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="header-center align-self-center">
                                        <div className="header-logo">
                                            <HeaderLogo logoColor="dark" />
                                        </div>
                                    </div>

                                    <div className="header-right d-flex justify-content-end">
                                        <div className="d-flex align-items-center">
                                            <div className="search-close-toggle">
                                                <button onClick={ this.close } type="button" className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto" data-dismiss="modal" aria-label="Close">Close search</button>
                                            </div>
                                        </div>

                                        <Actions />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body modal-body-centered">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

export default SearchModal;
