import React, { useContext, useState } from 'react';
import './Login.css';
import Link from '@material-ui/core/Link';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../firebaseConfig/firebaseConfig';
import { UserContext } from '../../App';



if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }





const Longin = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggInUser, setLoggInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        confirm: '',
        error:'',
        success:false
    });

    

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
            console.log(newUserInfo)

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
                    setUser(newUserInfo)
                    console.log(res)
                    

                   
                })
                .catch((error) => {
                    const newUserInfo = {...user}
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                    console.log(error)
                   
                   
                });
        }
        if(user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    
                    
                    const newUserInfo = {...user};
                    
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    setLoggInUser(newUserInfo);
                   
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


    
  
    return (
        <div>
            <form className='frm' onSubmit={handleSubmit}>
                {newUser && <input className='input-style' onBlur={handleBlur} type="text" name="name" id="Name" placeholder='Name'/>}
                <input className='input-style' onBlur={handleBlur} type="email" name="email" id="Email" placeholder='Email' required />
                <input className='input-style' onBlur={handleBlur} type="password" name="password" id="Password" placeholder='Password' required />
                { newUser && <input className='input-style' onBlur={handleBlur} type="password" name="confirm" id="Confirm" placeholder='Confirm Password' required/>}
                <input type="submit" value={newUser ? "Sign up" : "Sign in"}/>
                {newUser ? <p>Already have an account? <Link component="button" variant="body2" onClick={()=> setNewUser(false)}>  Sign in </Link></p> : <p>Create a new account? <Link component="button" variant="body2" onClick={()=> setNewUser(true)}> Sign up </Link></p>}
                {user.error}
                { user.success && <p style={{color:'green'}}>User {newUser ? "created" : "logged" } successfully</p>}
            </form>
        </div>
    );
};

export default Longin;