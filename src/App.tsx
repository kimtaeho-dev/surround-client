import React from 'react';
import GlobalContainer from 'react-div-100vh';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Room from './pages/Room/Index';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <GlobalContainer>

      <GlobalStyles />

      <BrowserRouter>
        <Switch>
          <Route component={Room} />
        </Switch>
      </BrowserRouter>

    </GlobalContainer>
  );
}

export default App;
