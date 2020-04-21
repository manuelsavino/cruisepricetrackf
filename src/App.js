import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NewItin from "./Pages/NewItin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/newitin" component={NewItin} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
