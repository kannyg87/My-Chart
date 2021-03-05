import React, { Component } from 'react';
import axios from 'axios';

class SubscribeForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            values: {
                email: ''
            },
            successMessage: "Sender's message was sent successfully",
            warningMessage: 'Fill up the form, please!',
            errorMessage: 'Something go wrong. Try again later!',
            alertClass: '',
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
            alertTimeout: setTimeout( function () {
                    var element = document.querySelector( '#alert' );
                    element.classList.remove( 'fadeIn' );
                    element.classList.add( 'fadeOut' );

                    setTimeout( function () {
                        element.remove()
                    }, 900 )
                }, this.state.delay
            )
        } );
    };

    callAlert = ( message, type ) => {
        if ( !document.querySelector( '#alert' ) ) {
            if ( type === 'success' ) {
                this.setState( { alertClass: 'success' } )
            }

            if ( type === 'error' ) {
                this.setState( { alertClass: 'danger' } )
            }

            if ( type === 'warning' ) {
                this.setState( { alertClass: 'warning' } )
            }

            var alert = '<div id="alert" class="animated fadeIn alert alert--shadow alert-' + this.state.alertClass + '">' + message + '</div>';

            var element = document.querySelector( '.newsletter-form' );

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
            <form onSubmit={ this.submitForm } className="newsletter-form top-no-space">
                <div className="input-group">
                    <input name="email"
                           value={ this.state.values.email }
                           onChange={ this.handleInputChange }
                           id="cf-2-email"
                           type="email"
                           placeholder="Your email address"
                           required="required" />

                    <div className="input-group-append">
                        <button type="submit" className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space text-uppercase">Subscribe</button>
                    </div>
                </div>
            </form>
        );
    };
};

export default SubscribeForm;
