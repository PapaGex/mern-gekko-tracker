import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import GeckoList from "./components/gecko-list.component";
import EditGecko from "./components/edit-gecko.component";
import CreateGecko from "./components/create-gecko.component";
import CreateSpecies from "./components/create-species.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={GeckoList} />
        <Route path="/edit/:id" component={EditGecko} />
        <Route path="/create" component={CreateGecko} />
        <Route path="/user" component={CreateSpecies} /> 
      </div>
    </Router>
  );
}

export default App;
