import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Tot from './Tot.js';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
          <Route exact path="/" component={Tot} />
      </Switch> 
      </Router>   
    </div>
  );
}

export default App;
