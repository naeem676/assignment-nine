import React, { useContext, useState } from 'react';
import './Login.css';
import Link from '@material-ui/core/Link';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../firebaseConfig/firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from "../../Icon/google.png";
import facebook from "../../Icon/fb.png";



if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }


const Longin = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggInUser, setLoggInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        name: '',
        email:'',
        password:'',
        confirm: '',
        error:'',
        success:false
    });

    const history = useHistory();
    const location = useLocation();
   
  
    const { from } = location.state || { from: { pathname: "/" } };

    

    const handleBlur = (e) => {
 
        let fieldValidation = true;
        
        if (e.target.name === "email") {
            fieldValidation = /\S+@\S+\.\S+/.test(e.target.value);
      
        }
        if (e.target.name === "password") {
            fieldValidation = /^(?=.*\d)[a-zA-Z0-9]{7,}$/.test(e.target.value);
            
        }
        if (e.target.name === "name") {
            fieldValidation = e.target.value;
 
            
        }
        
        if (e.target.name === "confirm") {
            fieldValidation = e.target.value;
            
        }
        if(e.target.value !== user.password){
            
            setUser({confirm:e.target.value})
        }

        
        if(fieldValidation){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        
        }
    
    }
    
 
    const handleSubmit= (e)=> {

        if(newUser && user.email && user.password){
            if(user.password !== user.confirm){
                alert("The passwords doesn't match")
                return false;
            }
            
            
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    
                    
                    const newUserInfo = {...user};
                   
                    
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateName(user.name);
                    history.replace(from);
                    
   
                })
                .catch((error) => {
                    const newUserInfo = {...user}
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
    
                });
        }
        if(user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    
                    
                    const newUserInfo = {...user};
                    
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    setLoggInUser(newUserInfo);
                    history.replace(from);
                   
                })
                .catch((error) => {
                    const newUserInfo = {...user}
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    setLoggInUser(newUserInfo);
                });
        }
      
         e.preventDefault()
    }

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const googleHandle = ()=>{

            firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
     
                    setLoggInUser(result.user);
                    history.replace(from);
               
                
            }).catch((error) => {
           
                    setLoggInUser(error);
              
 
            });

    }

    

    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    const facebookHandle = () => {
      firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        
        
        setLoggInUser(result.user);
        history.replace(from);

        
      })
      .catch((error) => {
 
        setLoggInUser(error);
  
      });
      
      

    }
    const updateName =(name)=>{
        var user = firebase.auth().currentUser;

        user.updateProfile({
        displayName:name
        }).then(function() {

        }).catch(function(error) {
        // An error happened.
        });

    }
    

  
  
    return (
        <div>
            <form className='frm' onSubmit={handleSubmit}>
                {newUser && <input className='input-style' onBlur={handleBlur} type="text" name="name" id="Name" placeholder='Name' required/>}
                <input className='input-style' onBlur={handleBlur} type="email" name="email" id="Email" placeholder='Email' required />
                <input className='input-style' onBlur={handleBlur} type="password" name="password" id="Password" placeholder='Password' required />
                { newUser && <input className='input-style' onBlur={handleBlur} type="password" name="confirm" id="Confirm" placeholder='Confirm Password' required/>}
                <input type="submit" value={newUser ? "Sign up" : "Sign in"}/>
                {newUser ? <p>Already have an account? <Link component="button" variant="body2" onClick={()=> setNewUser(false)}>  Sign in </Link></p> : <p>Create a new account? <Link component="button" variant="body2" onClick={()=> setNewUser(true)}> Sign up </Link></p>}
               
            </form>
        
            <div className='underline'>
                <div className='under'> <hr/></div>
                <div className='or'>Or</div>
                <div className='line'> <hr/></div>
            </div>

            <div>
            <button className='google' onClick={googleHandle}><img className='google-img' src={google} alt="" srcset=""/> Google Sign in</button> <br/>
            <button className='facebook' onClick={facebookHandle}><img className='facebook-img' src={facebook} alt="" srcset=""/> Facebook Sign in</button>
             

            </div>


            
        </div>
    );
};

export default Longin;