import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import CreateScreen from "./Screens/CreateScreen";
import PreviewScreen from "./Screens/PreviewScreen";

function App() {
  // const history = createBrowserHistory();
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CreateScreen} />
        <Route path="/preview" component={PreviewScreen} />
      </Switch>
    </Router>
  );
}

export default App;
