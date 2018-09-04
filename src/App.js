import React, { Component } from 'react';
import $ from "jquery";
import './App.css';
import Header from './pages/header'
import Footer from './pages/footer'
import Routes from './routes'

class App extends Component {
  componentDidMount() {
    $('.nav-item a').on('click', function(){
      $(".navbar-collapse.collapse").toggleClass("show");
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          <Routes />
        </main>
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
