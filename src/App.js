import React from "react";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Top10 from "./components/Top10";
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/top10" component={Top10}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
      </Switch>


      
    </Router>
    
  );
}

export default App;
