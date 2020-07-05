import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import CreateScreen from "./Screens/CreateScreen";

function App() {
  // const history = createBrowserHistory();
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CreateScreen} />
      </Switch>
    </Router>
  );
}

export default App;
