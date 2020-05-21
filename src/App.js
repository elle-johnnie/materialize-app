import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Layout/navbar';
import SideNav from './components/Layout/sidenav';
import HeaderSizes from './components/Dashboard/headersizes';
import Alignment from './components/Dashboard/alignment';
import Rainbow from './components/Dashboard/rainbow';
import ScreenSize from './components/Dashboard/screensize';
import Buttons from './components/Dashboard/buttons';
import Grid from './components/Dashboard/grid';
import Icons from './components/Dashboard/icons';
import Shadows from './components/Dashboard/shadows';
import Cards from './components/Dashboard/cards';
import Modal from './components/Dashboard/modal';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className="App">
      <BrowserRouter>
        <NavBar />
        <SideNav />
        <Switch>
          <Route path='/headersizes' component={HeaderSizes} />
          <Route path='/alignment' component={Alignment} />
          <Route path='/rainbow' component={Rainbow} />
          <Route path='/screen-size' component={ScreenSize} />
          <Route path='/buttons' component={Buttons} />
          <Route path='/grid' component={Grid} />
          <Route path='/icons' component={Icons} />
          <Route path='/shadows' component={Shadows} />
          <Route path='/cards' component={Cards} />
          <Route path='/modal' component={Modal} />
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
