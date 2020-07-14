import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import CreateScreen from "./Screens/CreateScreen";
import PreviewScreen from "./Screens/PreviewScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  // const history = createBrowserHistory();
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CreateScreen} />
        <Route path="/preview" component={PreviewScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Route path="/login" component={LoginScreen} />
      </Switch>
    </Router>
  );
}

export default App;
