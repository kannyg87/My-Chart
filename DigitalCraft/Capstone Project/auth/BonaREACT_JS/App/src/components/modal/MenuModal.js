import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchModal from '../../components/modal/SearchModal';
import ModalMenuPrimary from '../../blocks/menu/ModalMenuPrimary';
import ModalMenuLanguages from '../../blocks/menu/ModalMenuLanguages';
import Actions from '../../blocks/actions/Actions';

class MenuModal extends Component {
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
                <div className="menu-toggle">
                    <button onClick={ this.open.bind( this ) } type="button" className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto" data-toggle="modal" data-target="#menu-modal">Menu</button>
                </div>

                <Modal
                    className="modal fade"
                    id="menu-modal"
                    show={ this.state.showModal }
                    onHide={ this.close }
                    backdrop={ false }
                    aria-labelledby="menu-modal"
                    aria-hidden="true"
                    dialogClassName="modal-full"
                    tabIndex="-1"
                    ref={ node => this.chart = node }>
                    <div className="wrapper">
                        <div className="modal-content">
                            <div className="modal-header modal-header-top">
                                <div className="header-content d-flex justify-content-between w-100">
                                    <div className="header-left align-self-center">
                                        <div className="links">
                                            <div className="links-items">
                                                <div className="links-item">
                                                    <a href={ process.env.PUBLIC_URL + "/services" } className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto">Services</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="search-toggle">
                                            <SearchModal />
                                        </div>
                                    </div>

                                    <div className="header-center align-self-center">
                                        <HeaderLogo logoColor="dark" />
                                    </div>

                                    <div className="header-right d-flex justify-content-end">
                                        <div className="d-flex align-items-center">
                                            <SearchModal />

                                            <div className="menu-close-toggle">
                                                <button onClick={ this.close } type="button" className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto" data-dismiss="modal" aria-label="Close">Close menu</button>
                                            </div>
                                        </div>

                                        <Actions />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body modal-body-centered">
                                <div className="animated fadeinright w-100">
                                    <ModalMenuPrimary />

                                    <div className="modal-text">
                                        <p>© { new Date().getFullYear() } Health & Medical React JS Template by Adveits</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <ModalMenuLanguages />
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

export default MenuModal;
