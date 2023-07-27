import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Blackjack from './Blackjack';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Blackjack />
          </Route>
          <Route exact path="/blackjack">
            <Blackjack />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routes;