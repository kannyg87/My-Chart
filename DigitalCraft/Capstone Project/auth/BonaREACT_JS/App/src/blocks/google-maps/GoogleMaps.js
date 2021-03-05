import React from 'react';
import scriptLoader from 'react-async-script-loader';
import GoogleMapsStyle from '../../data/google-maps/googleMapsStyle';

class Maps extends React.Component {
    constructor( props ) {
        super( props );
        this.mapRef = React.createRef();
        this.map = null;
    }

    UNSAFE_componentWillReceiveProps( { isScriptLoaded, isScriptLoadSucceed } ) {
        if ( isScriptLoaded && !this.props.isScriptLoaded ) {
            // 189 Bedford Ave, Brooklyn, NY 11211, United States
            var address_latlng = new window.google.maps.LatLng( 40.717480, -73.957730 );
            // load finished
            if ( isScriptLoadSucceed ) {
                this.map = new window.google.maps.Map( this.mapRef.current, {
                    center: address_latlng,
                    zoom: 18,
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    styles: GoogleMapsStyle
                } );

                var icon = {
                    url: 'assets/img/demo/16_img.png',
                    size: new window.google.maps.Size( 112, 118 )
                };

                this.map.setCenter( address_latlng );

                new window.google.maps.Marker( {
                    position: address_latlng,
                    map: this.map,
                    icon: icon
                } );

            } else this.props.onError();
        }
    }

    render() {
        return (
            <div id="google-maps" ref={ this.mapRef }></div>
        );
    }
}

export default scriptLoader( ['https://maps.googleapis.com/maps/api/js?key=AIzaSyD9TrJVxlYSCKv8WHGcR2fHTg-Ltx1beWU'] )( Maps );
