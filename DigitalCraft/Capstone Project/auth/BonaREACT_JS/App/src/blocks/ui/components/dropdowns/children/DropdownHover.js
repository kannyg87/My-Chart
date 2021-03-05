import React, { Component } from 'react'
import { Dropdown, Fade } from 'react-bootstrap';

class DropdownHover extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        }
    };

    render() {
        return (
            <Dropdown show={ this.state.show } onMouseLeave={ ( e ) => this.setState( { show: false } ) }>
                <Dropdown.Toggle variant="primary" id="dropdown-hover" onMouseEnter={ ( e ) => this.setState( { show: true } ) }>
                    Hover
                </Dropdown.Toggle>

                <Fade in={ this.state.show }>
                    <Dropdown.Menu onMouseLeave={ ( e ) => this.setState( { show: false } ) }>
                        <Dropdown.Item href="#dropdowns-open-variations/action">Action</Dropdown.Item>
                        <Dropdown.Item href="#dropdowns-open-variations/action">Another action</Dropdown.Item>
                        <Dropdown.Item href="#dropdowns-open-variations/action">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Fade>
            </Dropdown>
        );
    };
}

export default DropdownHover;
