import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Error from "./Components/Error";
import SecondScreen from "./Components/SecondScreen";
import ThirdScreen from "./Components/ThirdScreen";
import FourthScreen from "./Components/FourthScreen";
import FinalScreen from "./Components/FinalScreen";

function App() {
  return (
    // <Home />

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/SecondScreen" component={SecondScreen} exact />
      <Route
        path="/ThirdScreen"
        render={(props) => <ThirdScreen {...props} exact />}
      />
      <Route path="/FourthScreen" component={FourthScreen} exact />
      <Route path="/FinalScreen" component={FinalScreen} exact />

      <Route component={Error} />
    </Switch>
  );
}

export default App;
