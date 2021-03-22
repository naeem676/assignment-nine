import React, { useContext } from 'react';
import { DestinationContext } from '../../App';
import './Booked.css';


const Booked = () => {
    const [destination, setDestination] = useContext(DestinationContext)
    return (
        <div>
        <nav className='nav-last'>
            <a className='a' href="/home">Home</a>
        </nav>

        <div className='welcome'>
            <h1>welcome to {destination.destination}</h1>
        </div>   
            
        </div>
    );
};

export default Booked;