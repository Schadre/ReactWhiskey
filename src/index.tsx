import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FirebaseAppProvider, AuthCheck } from "reactfire";
import { Home, Whiskey, Contact, About, SignIn } from "./components";
import "./style.css";
import { firebaseConfig } from "./firebaseConfig";
import "firebase/auth";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

const temp_props = "Whiskey";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<>...</>}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home title={temp_props} />
              </Route>
              <Route path="/whiskey">
                <Whiskey></Whiskey>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/signin">
                <SignIn></SignIn>
              </Route>
            </Switch>
          </Router>
        </Provider>
      </FirebaseAppProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
