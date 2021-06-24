// frontend/src/App.js
import './index.css'
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import SignupForm from "./components/SignupFormModal";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Upload from "./components/Upload";
import SinglePost from "./components/SinglePost";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div>

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupForm />
            </Route>
            <Route path='/upload-image'>
              <Upload />
            </Route>
            <Route exact path='/'>
            <Homepage />
            </Route>
            <Route path='/images/:id'>
              <SinglePost />
            </Route>
          </Switch>
        )}
      </div>
      </>
  );

}

export default App;
