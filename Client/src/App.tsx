import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
import CreateScreen from "./Screens/CreateScreen";
import PreviewScreen from "./Screens/PreviewScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";
import FileScreen from "./Screens/FileScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  // const history = createBrowserHistory();

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/create" component={CreateScreen} />
        <Route path="/preview" component={PreviewScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/file/:_id" component={FileScreen} />
      </Switch>
    </Router>
  );
}

export default App;
