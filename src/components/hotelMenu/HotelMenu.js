import React from 'react';
import first from "../../Image/Rectangle 26.png";
import second from "../../Image/Rectangle 27.png";
import third from "../../Image/Rectangle 28.png";
import star from "../../Icon/star_1_.png";
import './HotelMenu.css';
import logo from "../../Logo.png";
import MapContainer from '../mapContainer/MapContainer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    const classes = useStyles();
    return (
        <div>
        
        <div className='menu-nav'>

                    <nav>
                    <img className='logo' src={logo} alt="" srcset=""/>
                    <p>News</p>
                    <p>Destination</p>
                    <p>Blog</p>
                    <p>Contact</p>
                    
                    </nav>

                    </div>
            <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid  item xs={6}>
                <div>
                <div className='bed-area'>
                    <div> <img className='bed-img' src={first} alt="" srcset=""/> </div>
                    <div>
                    <p>Light bright airy stylish apt & safe paceful stay</p>
                    <small>4guest 2bedrooms 2beds 3bath</small><br/>
                    <small>with air conditioning kitchen </small><br/>
                    <small>Cancellation fexibility availiable</small>
                    <p><img className='star' src={star} alt="" srcset=""/>4.9(20) $34/night $167 total</p>
                    </div>
                </div>
                <div className='bed-area'>
                <div> <img className='bed-s' src={second} alt="" srcset=""/> </div>
                    <div>
                    <p>Apartment in Lost panorama</p>
                    <small>4guest 2bedrooms 2beds 3bath</small><br/>
                    <small>with air conditioning kitchen </small><br/>
                    <small>Cancellation fexibility availiable</small>
                    <p><img className='star-s' src={star} alt="" srcset=""/>4.8(10) $52/night $167 total</p>
                    </div>
                </div>
                <div className='bed-area'>
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