import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Dropdown } from 'react-bootstrap';
import DropdownHover from './DropdownHover';

const OpenVariations = () => {

    return (
        <div id="dropdowns-open-variations">
            <h4>Open variations</h4>

            <div className="bd-example">

                <div className="btn-group mr-1" id="dropdown-click">
                    <Dropdown>
                        <Dropdown.Toggle className="btn btn-primary dropdown-toggle" id="dropdownMenuButton-1">
                            Click default
                        </Dropdown.Toggle>

                        <Dropdown.Menu renderOnMount>
                            <Dropdown.Item href="#dropdowns-open-variations/action">Action</Dropdown.Item>
                            <Dropdown.Item href="#dropdowns-open-variations/action">Another action</Dropdown.Item>
                            <Dropdown.Item href="#dropdowns-open-variations/action">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="btn-group mr-1">
                    <DropdownHover />
                </div>
            </div>

            <PrismCode
                code={ '<div className="btn-group">\n' +
                '  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Click default</button>\n' +
                '\n' +
                '  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton-1">\n' +
                '    <a className="dropdown-item" href="#">Action</a>\n' +
                '    <a className="dropdown-item" href="#">Another action</a>\n' +
                '    <a className="dropdown-item" href="#">Something else here</a>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default OpenVariations;
