import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import App from '../App';
import PodsContainer from './PodsContainer';
import PodContainer from './PodContainer';
import ParticipantWishlistContainer from './ParticipantWishlistContainer';

class Routes extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route path="/pods" exact component={App} />
          {/* <Route path="/pods/:id" component={PodContainer} /> */}
          <Route path="/pods/:pod_id/participants/:id" component={ParticipantWishlistContainer} />
          {/* <Route path="/settings" component={SettingsComponent} /> */}
        </Switch>
          <ul>
            <li>
              <Link to="/pods">Pods</Link>
            </li>
            <li>
              <Link to="/pods/participants">Pod Participants</Link>
            </li>
            <li>
              <Link to="/pods/participants">Pod Wishlists</Link>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
