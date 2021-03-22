
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Home from './components/home/Home';
import NoMatch from './components/nomatch/NoMatch';
import { createContext, useState } from 'react';
import Longin from './components/login/Longin';
import HotelMenu from './components/hotelMenu/HotelMenu';
import PrivateRoute from './components/privateRouter/PrivateRoute';
import Booked from './components/booked/Booked';
export const DestinationContext = createContext({});
export const UserContext = createContext([]);

function App() {
  const [destination, setDestination] = useState({});
  const [loggInUser, setLoggInUser]= useState([]);
  return (
    <DestinationContext.Provider value={[destination, setDestination]}>
    <UserContext.Provider value={[loggInUser, setLoggInUser]}>
    <Router>
      <Switch>
      <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/login'>
        <Longin></Longin>
        </Route>
        <Route path='/booked'>
        <Booked></Booked>
        </Route>
       
        <PrivateRoute path='/menu'>
        <HotelMenu></HotelMenu>
        </PrivateRoute>
        <Route path='*'>
        <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    
    </DestinationContext.Provider>
  );
}

export default App;
