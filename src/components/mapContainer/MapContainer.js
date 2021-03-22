import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { useContext } from 'react';
import { DestinationContext } from '../../App';


const MapContainer = (props) => {

    const [destination, setDestination] = useContext(DestinationContext);
    const loadMap=(center)=>{
        
        if(center.destination === "Sajek"){
           return {lat:23.381993, lng: 92.293823};
        }
        if(center.destination === "Sreemangal"){
           return {lat:24.3065193, lng:91.72955030000003};
            
        }
        if(center.destination === "Shundorban"){
            return {lat:21.949727, lng:89.18333};
        }
        else{
            return{lat:22.3384, lng:91.83168};
        }
    }
    
    const mapStyles = {
        width: '45%',
        height: '120%',
      };
    return (
        <div>
             <Map
                google={props.google}
                zoom={9}
                style={mapStyles}
                initialCenter={loadMap(destination)}
                >
                <Marker position={loadMap(destination)} />
                </Map>
        </div>
    );
};

export default GoogleApiWrapper ({apiKey:""}) (MapContainer);

// AIzaSyCHe40JCe48WLYzrbMA3BbZfbB9WeI11RA