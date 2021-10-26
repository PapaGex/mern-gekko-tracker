import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import GeckoList from "./components/gecko-list.component";
import SpeciesList from "./components/species-list.component";
import EditGecko from "./components/edit-gecko.component";
import CreateGecko from "./components/create-gecko.component";
import CreateSpecies from "./components/create-species.component";
import CreateTask from "./components/create-task.component";
import Register from "./components/registration.component"


function App() {
  return (
      <>
        <Router>
          <div className="container">
            <Navbar/>
            <br/>
            <Route path="/gallery" component={GeckoList}/>
            <Route path="/" exact component={SpeciesList}/>
            <Route path="/edit/:id" component={EditGecko}/>
            <Route path="/create" component={CreateGecko}/>
            <Route path="/species" component={CreateSpecies}/>
            <Route path="/work" component={CreateTask}/>
            <Route path="/login" component={Register}/>
          </div>

          <script src="./index.js"/>

        </Router>
      </>
  );
}

export default App;
