import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            values: {
                name_surname: '',
                services: '',
                phone: '',
                email: '',
                message: '',
                appointment_date: ''
            },
            successMessage: "Sender's message was sent successfully",
            warningMessage: 'Fill up the form, please!',
            errorMessage: 'Something go wrong. Try again later!',
            alertclassName: '',
            responseMessage: '',
            alertTimeout: '',
            delay: 5000
        };
    };

    submitForm = async e => {
        e.preventDefault();

        if ( document.querySelector( '#alert' ) ) {
            document.querySelector( '#alert' ).remove();
        }

        this.setState( { isSubmitting: true } );

        axios.post( 'https://store.adveits.com/API/form.php', this.state.values, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
        }, ).then( response => {
            if ( response.data.status === 'success' ) {
                this.setState( { responseMessage: this.state.successMessage } );
            }

            if ( response.data.status === 'warning' ) {
                this.setState( { responseMessage: this.state.warningMessage } );
            }

            if ( response.data.status === 'error' ) {
                this.setState( { responseMessage: this.state.errorMessage } );
            }

            this.callAlert( this.state.responseMessage, response.data.status )
        } ).catch( error => {
            this.callAlert( this.state.errorMessage, 'error' )
        } );
    };

    removeAlert = () => {
        clearTimeout( this.state.alertTimeout );
        this.setState( {
            alertTimeout: setTimeout( function() {
                    var element = document.querySelector( '#alert' );
                    element.classNameList.remove( 'fadeIn' );
                    element.classNameList.add( 'fadeOut' );
                    setTimeout( function() {
                        element.remove()
                    }, 900 )
                }, this.state.delay
            )
        } );
    };

    callAlert = ( message, type ) => {
        if ( ! document.querySelector( '#alert' ) ) {
            if ( type === 'success' ) {
                this.setState( { alertclassName: 'success' } )
            }

            if ( type === 'error' ) {
                this.setState( { alertclassName: 'danger' } )
            }

            if ( type === 'warning' ) {
                this.setState( { alertclassName: 'warning' } )
            }

            var alert = '<div id="alert" className="animated fadeIn alert alert--shadow alert-' + this.state.alertclassName + '">' + message + '</div>';

            var element = document.querySelector( '#cf-1' );

            element.insertAdjacentHTML( 'beforeend', alert );

            this.removeAlert();
        }
    };

    handleInputChange = e =>
        this.setState( {
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
    } );

    render() {
        return (
            <form method="post" action="form.php" id="cf-1" className="contact-form">
                <div className="form-group form-group-xs">
                    <p className="input-group gutter-width-xs no-space">
                        <span className="gutter-width">
                            <input name="name_surname" type="text" id="cf-1-name-surname" className="form-control form-lg" value={ this.state.values.name_surname } onChange={ this.handleInputChange } placeholder="Your name and surname here *" required="required" />
                        </span>

                        <span className="gutter-width">
                            <select name="services" id="cf-1-services" value={ this.state.values.services } onChange={ this.handleInputChange } className="form-control form-lg">
                                <option value="" disabled hidden>Choose a service *</option>
                                <option value="labaratory analysis">Labaratory analysis</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="neurology">Neurology</option>
                                <option value="dental-service">Dentatal service</option>
                            </select>
                        </span>
                    </p>
                </div>

                <div className="form-group form-group-xs">
                    <p className="input-group gutter-width-xs no-space">
                        <span className="gutter-width">
                            <input name="phone" type="text" id="cf-1-phone" className="form-control form-lg" value={ this.state.values.phone } onChange={ this.handleInputChange } placeholder="Your phone number here *" required="required" />
                        </span>

                        <span className="gutter-width">
                            <input name="appointment_date" type="text" id="cf-1-appointment_date" className="form-control form-lg" value={ this.state.values.appointment_date } onChange={ this.handleInputChange } placeholder="Appointment date ( dd/mm/yyyy )" />
                        </span>
                    </p>
                </div>

                <div className="form-group form-group-xs">
                    <textarea name="message" id="cf-1-message" className="form-control form-lg" value={ this.state.values.message } onChange={ this.handleInputChange } placeholder="Your message here"></textarea>
                </div>

                <div className="form-group form-group-xs mb-0">
                    <button type="submit" className="btn btn-primary">Book Now</button>
                </div>
            </form>
        );
    };
};

export default ContactForm;
