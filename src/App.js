import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cardog from './components/Cardog';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
//d
const store = createStore(() => [],{},applyMiddleware())
class App extends Component {
  render() {
    return (
      <Provider store ={store}>
      <div className="App">
        <Navbar />
        <header className="App-header">
        </header>
        <div>
          <Cardog />
        </div>
      </div>
      </Provider>
    );
  }
}


export default App;
