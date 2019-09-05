import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import  Movies from './Movies';
import Nav from './Nav';


class App extends Component {
  render() {
  return (
        <main className="container">
            <Nav />
          <Movies />


          </main>
        );
      };
    }

export default App;
