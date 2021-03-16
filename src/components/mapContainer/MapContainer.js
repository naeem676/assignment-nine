import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';


const MapContainer = (props) => {

    const mapStyles = {
        width: '45%',
        height: '120%',
      };
    return (
        <div>
             <Map
                google={props.google}
                zoom={4}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
                >
                <Marker position={{ lat: 48.00, lng: -122.00}} />
                </Map>
        </div>
    );
};

export default GoogleApiWrapper({apiKey:''}) (MapContainer);