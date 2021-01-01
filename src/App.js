import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useStateValue } from './stateProvider'
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from './components/Login'

import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
      <div className='app__body'>
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/rooms/:roomId'>
              <Chat />
            </Route>
            <Route path='/'>
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
