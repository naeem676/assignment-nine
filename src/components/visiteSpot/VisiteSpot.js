import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { DestinationContext } from '../../App';
import './VisiteSpot.css'


const VisiteSpot = () => {
    const [sajek, setSajek] = useState(true);
    const [sreemangal, setSreemangal]= useState(false);
    const [sundor, setSundor]= useState(false);
    const [menu, setMenu] = useState(true);
    const [book, setBook] = useState(false);
    const [button, setButton]= useState(true);
    const [destination, setDestination] = useContext(DestinationContext);
    

    const sajakOver = () => {
        setSajek(true);
        setSreemangal(false);
        setSundor(false)
    }
    const sreeOver = () => {
        setSajek(false);
        setSreemangal(true);
        setSundor(false)
    }
    const sundorOver = () =>{
        setSundor(true);
        setSreemangal(false);
        setSajek(false)
    }

  
   const handleSajek = () => {
    setMenu(false)
    setBook(true);
    setButton(false)


}
const handleSree = () => {
    setMenu(false)
    setBook(true);
    setButton(false)


}
const handleSundor = () => {
    setMenu(false)
    setBook(true);
    setButton(false)


}
const history = useHistory();
const { register, handleSubmit} = useForm();
const onSubmit = data =>{
    history.push('/menu')
    setDestination(data);
}

   
    
    
    return (
        <div className='main'>
           <div className='booking'>
            {sajek && <div>
                <h1>Sajek</h1>
                <small>(Bengali: সাজেক উপত্যকা) is an emerging tourist spot in Bangladesh situated <br/> among the hills of the Kasalong range of mountains in Sajek union,<br/> Baghaichhari Upazila in Rangamati District.[3] The valley is 1,476 feet (450 m) <br/> above sea level.[4] Sajek valley is known as the Queen of Hills & Roof of Rangamati</small><br/>
                {button && <button onClick={handleSajek} className='book-btn'>Booking</button>}
            </div> }
            {sreemangal && <div>
                <h1>Sreemangal</h1>
                <small>Sreemangal is located at 24.3083°N 91.7333°E. <br/> It has 43,952 households and total area 450.74 km2. <br/> It is bordered by Moulvibazar Sadar to the north, Tripura to the south,<br/> Kamalganj to the east and Chunarughat, Nabiganj and Bahubal to the west</small><br/>
                {button && <button onClick={handleSajek} className='book-btn'>Booking</button>}
            </div>}
            {sundor && <div><h1>Sundorbans</h1>
            <small>The Bengali name Sundarban Bengali: সুন্দরবন means beautiful forest. <br/>[11][12] It may have been derived from the word Sundari or Sundri, <br/> the local name of the mangrove species Heritiera fomes. Alternatively,<br/> it has been proposed that the name is a corruption of Samudraban, Shomudrobôn (Sea Forest),<br/> or Chandra-bandhe, the name of a tribe</small><br/>
            {button && <button onClick={handleSajek} className='book-btn'>Booking</button>}
            </div>}
           
            

            </div>
           {menu && <div className='main-menu'>
        <div onClick={handleSajek} onMouseOver={sajakOver} className='sajek'>
        <h3>Sajek Valley</h3>
        
        </div>
        <div onClick={handleSree} onMouseOver={sreeOver} className='sreemangal'>
        <h3>Sreemangal Upazila</h3>
        
        </div>
        <div onClick={handleSundor} onMouseOver={sundorOver} className='sundarbans'>
        <h3>Sundarbans</h3>
        
        
        </div>
        
        </div>}

    {   book && <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <label>Origin</label>
                <input name="origin" value="Chittagong" ref={register} required />
                <label>Destination</label>
                {sajek &&<input name="destination" value="Sajek" ref={register} required/>}
                {sreemangal &&<input name="destination" value="Sreemangal" ref={register} required/>}
                {sundor &&<input name="destination" value="Shundorban" ref={register} required/>}
                <div className='date'>
                <div>
                <label>From</label>
                <input name="From" type="date" ref={register} required />
                </div>
                <div>
                <label>To</label>
                <input name="To" type="date" ref={register} required/>
                </div>
                </div>
                <input type="submit" value="Start Booking" />
                </form>

        </div>}
        </div>
    );
};

export default VisiteSpot;