import React, { Component } from 'react';
import ButtonAppBar from './components/ButtonAppBar'; //importe la bar de menu
import Themes from './components/Themes';
import Categories from './components/Categories';
import Contraintes from './components/Contraintes';


import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
        
        <ButtonAppBar />
        <Themes />
        <Categories />
        <Contraintes />

        </div>

        
        
      </div>
    );
  }
}

export default App;
