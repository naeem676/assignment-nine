import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './VisiteSpot.css'


const VisiteSpot = () => {
    const [sajek, setSajek] = useState(false);
    const [sreemangal, setSreemangal]= useState(false);
    const [sundor, setSundor]= useState(false);
    const [menu, setMenu] = useState(false)

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

    const { register, handleSubmit } = useForm();

   
    
    
    return (
        <div className='main'>
           <div className='booking'>
            {sajek && <div>
                <h1>Sajek</h1>
                <p>(Bengali: সাজেক উপত্যকা) is an emerging tourist spot in Bangladesh situated <br/> among the hills of the Kasalong range of mountains in Sajek union,<br/> Baghaichhari Upazila in Rangamati District.[3] The valley is 1,476 feet (450 m) <br/> above sea level.[4] Sajek valley is known as the Queen of Hills & Roof of Rangamati</p>
                <button>Booking</button>
            </div> }
            {sreemangal && <div>
                <h1>Sreemangal</h1>
                <p>Sreemangal is located at 24.3083°N 91.7333°E. <br/> It has 43,952 households and total area 450.74 km2. <br/> It is bordered by Moulvibazar Sadar to the north, Tripura to the south,<br/> Kamalganj to the east and Chunarughat, Nabiganj and Bahubal to the west</p>
                <button>Booking</button>
            </div>}
            {sundor && <div><h1>Sundorbans</h1>
            <p>The Bengali name Sundarban Bengali: সুন্দরবন means beautiful forest. <br/>[11][12] It may have been derived from the word Sundari or Sundri, <br/> the local name of the mangrove species Heritiera fomes. Alternatively,<br/> it has been proposed that the name is a corruption of Samudraban, Shomudrobôn (Sea Forest),<br/> or Chandra-bandhe, the name of a tribe</p>
            <button>Booking</button>
            </div>}
            

            </div>
           {menu && <div className='main-menu'>
        <div onMouseOver={sajakOver} className='sajek'>
        <h3>Sajek Valley</h3>
        
        </div>
        <div onMouseOver={sreeOver} className='sreemangal'>
        <h3>Sreemangal Upazila</h3>
        
        </div>
        <div onMouseOver={sundorOver} className='sundarbans'>
        <h3>Sundarbans</h3>
        
        
        </div>
        
        </div>}

        <div>
              <form onSubmit={handleSubmit()}>
                <label>Origin</label>
                <input name="origin" ref={register} />
                <label>Destination</label>
                <input name="destination" ref={register} />
                <div className='date'>
                <div>
                <label>From</label>
                <input type="date"/>
                </div>
                <div>
                <label>To</label>
                <input type="date"/>
                </div>
                </div>
                <input type="submit" value="Booking" />
                </form>

        </div>
        </div>
    );
};

export default VisiteSpot;