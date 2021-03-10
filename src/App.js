
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
const LocationContext = createContext({});
const UserContext = createContext([]);

function App() {
  const [location, setLocation] = useState({});
  const [user, setUser]= useState([]);
  return (
    <LocationContext.Provider value={[location, setLocation]}>
    <UserContext.Provider value={[user, setUser]}>
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
        <Route path='*'>
        <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    
    </LocationContext.Provider>
  );
}

export default App;
