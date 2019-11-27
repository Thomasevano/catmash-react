import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Vote from './Vote'
import Score from './Score'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Vote}/>
      <Route path="/score" exact component={Score}/>
    </Switch>
  )
}

export default Routes