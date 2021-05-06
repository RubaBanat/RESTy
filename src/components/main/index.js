import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../app/home';
import HistoryDetails from '../history/historyDetails';
import Help from '../help';
// import '../app/App.css';

function Main() {
  return(
      <main>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/history" component={HistoryDetails}/>
          <Route path="/help" component={Help}/>
        </Switch>
      </main>
  )
}

export default Main;