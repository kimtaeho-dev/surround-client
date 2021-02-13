import React from 'react';
import GlobalContainer from 'react-div-100vh';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './common/Header';
import Home from './Home';
import Room from './Room';

function App() {
  return (
    <GlobalContainer>

      <Header />

      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/room"
            component={Room}
          />
        </Switch>
      </BrowserRouter>

    </GlobalContainer>
  );
}

export default App;
