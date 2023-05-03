import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Home from "./Components/Home";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home currentPage={currentPage} onChangePage={setCurrentPage} />
          </Route>
          <Route exact path="/about">
            <Aboutus />
          </Route>
          <Route exact path="/contact">
            <Contactus />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
