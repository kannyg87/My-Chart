import React, { Component } from 'react';
import SwipeBox from './SwipeBox';

class GalleryContent extends Component {
    constructor( props ) {
        super( props );
        this.swipeImg = React.createRef();
    }

    componentDidMount() {}

    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <div className="clearfix">
                        <div className="row gutter-width-sm with-pb-sm gallery-items">
                            <SwipeBox />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default GalleryContent;
