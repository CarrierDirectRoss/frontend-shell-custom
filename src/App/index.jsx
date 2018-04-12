import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Root from '../routes/Root';
import Callback from '../routes/Callback';
import paths from '../routes/paths';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={paths.root} component={Root} />
          <Route exact path={paths.authCallback} component={Callback} />
          <Redirect to={paths.root} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
