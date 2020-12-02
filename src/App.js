import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Nav from "./Nav";
import About from "./pages/About";
import Footer from "./Footer";
import Symptom from "./pages/Symptom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/symptom" component={Symptom} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
