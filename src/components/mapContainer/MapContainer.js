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
                zoom={8}
                style={mapStyles}
                initialCenter={{lat:23.381993, lng: 92.293823}}
                >
                <Marker position={{lat:23.381993, lng: 92.293823}} />
                </Map>
        </div>
    );
};

export default GoogleApiWrapper ({apiKey:""}) (MapContainer);

// AIzaSyCHe40JCe48WLYzrbMA3BbZfbB9WeI11RA