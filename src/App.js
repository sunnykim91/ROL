import React from 'react';
import { Route } from 'react-router-dom';
import Pvp from './pages/Pvp';
import Solo from './pages/Solo';
import Duo from './pages/Duo';
import Five from './pages/Five';
import All from './pages/All';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Route path='/pvp' component={Pvp} exact={true}></Route>
      <Route path='/solo' component={Solo} exact={true}></Route>
      <Route path='/duo' component={Duo} exact={true}></Route>
      <Route path='/five' component={Five} exact={true}></Route>
      <Route path='/all' component={All} exact={true}></Route>
    </>
  );
}

export default App;
