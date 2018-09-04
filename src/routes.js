import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Services from './pages/services';
import Clients from './pages/clients';
const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>      
      <Route path='/services' component={Services}/>
      <Route path='/clients' component={Clients}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Routes