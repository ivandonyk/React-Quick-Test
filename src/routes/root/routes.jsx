import React from 'react';
import {
  Switch,
} from 'react-router-dom';
import {
  PublicRoute,
  PrivateRoute,
} from '../../components/Routing';

import App from '../app';
import SignIn from '../auth';


export default (
  <Switch>
	  <PublicRoute path="/" exact component={SignIn}/>
    <PrivateRoute component={App} />
  </Switch>
);
