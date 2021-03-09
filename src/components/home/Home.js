import React from 'react';
import Header from '../header/Header';
import VisiteSpot from '../visiteSpot/VisiteSpot';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <VisiteSpot></VisiteSpot>
        </div>
    );
};

export default Home;