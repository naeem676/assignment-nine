import React, { useContext } from 'react';
import first from "../../Image/Rectangle 26.png";
import second from "../../Image/Rectangle 27.png";
import third from "../../Image/Rectangle 28.png";
import star from "../../Icon/star_1_.png";
import './HotelMenu.css';
import logo from "../../Logo.png";
import MapContainer from '../mapContainer/MapContainer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { DestinationContext, UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router-dom';
import { firebaseConfig } from '../firebaseConfig/firebaseConfig';

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const HotelMenu = () => {
    const [loggInUser, setLoggInUser] = useContext(UserContext);
    const [destination, setDestination] = useContext(DestinationContext);
    
    const classes = useStyles();
    
    const history = useHistory();

    const logOut = ()=>{
        firebase.auth().signOut().then(() => {
            history.push('/home')
            setLoggInUser([]);
          }).catch((error) => {
            setLoggInUser(error);
          });
    }
    const handleBooked = ()=>{
        history.push('/booked')
        console.log('booked');
    }
   
    
    
    return (
        <div>
        
        <div className='menu-nav'>

                    <nav>
                    <img className='logo' src={logo} alt="" srcset=""/>
                    <p>News</p>
                    <p>Destination</p>
                    <button className="log-out" onClick={logOut}>Log Out</button>
                    <p>Contact</p>
                    <p>{loggInUser.email}</p>
                    
                    </nav>

                    </div>
                    <div>
                        <h1>Stay in {destination.destination}</h1>
                    </div>
            <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid  item xs={6}>
                <div>
                <div className='bed-area' onClick={handleBooked}>
                    <div> <img className='bed-img' src={first} alt="" srcset=""/> </div>
                    <div>
                    <p>Light bright airy stylish apt & safe paceful stay</p>
                    <small>4guest 2bedrooms 2beds 3bath</small><br/>
                    <small>with air conditioning kitchen </small><br/>
                    <small>Cancellation fexibility availiable</small>
                    <p><img className='star' src={star} alt="" srcset=""/>4.9(20) $34/night $167 total</p>
                    </div>
                </div>
                <div className='bed-area' onClick={handleBooked}>
                <div> <img className='bed-s' src={second} alt="" srcset=""/> </div>
                    <div>
                    <p>Apartment in Lost panorama</p>
                    <small>4guest 2bedrooms 2beds 3bath</small><br/>
                    <small>with air conditioning kitchen </small><br/>
                    <small>Cancellation fexibility availiable</small>
                    <p><img className='star-s' src={star} alt="" srcset=""/>4.8(10) $52/night $167 total</p>
                    </div>
                </div>
                <div className='bed-area' onClick={handleBooked}>
                <div> <img className='bed-s' src={third} alt="" srcset=""/> </div>
                    <div>
                    <p>AR Lounge & Pool (r&r + b&b)</p>
                    <small>4guest 2bedrooms 2beds 3bath</small><br/>
                    <small>with air conditioning kitchen </small><br/>
                    <small>Cancellation fexibility availiable</small>
                    <p><img className='star-s' src={star} alt="" srcset=""/>4.9(25) $44/night $167 total</p>
                    </div>
                    
                </div>
                
            </div>

                </Grid>
                <Grid  item xs={6}>
                        <div className='location'>
                        <MapContainer></MapContainer>
                    </div>

                </Grid>
            </Grid>
            
            
            
            </div>
        </div>
    );
};

export default HotelMenu;