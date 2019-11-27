import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Vote from './Vote'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Vote}></Route>
    </Switch>
  )
}

export default Routes