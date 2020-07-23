import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
import CreateScreen from "./Screens/CreateScreen";
import PreviewScreen from "./Screens/PreviewScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";
import File from "./Screens/File";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  // const history = createBrowserHistory();
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/create" component={CreateScreen} />
        <Route path="/preview" component={PreviewScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/file/:_id" component={File} />
      </Switch>
    </Router>
  );
}

export default App;
