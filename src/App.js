import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Button } from 'react-bootstrap';
import Menu from './components/Menu/Menu';

import Top100List from './components/Top100List/Top100List';
function App() {
  return (
    <div className="App">
      
      <Menu></Menu>
<Top100List/>
     
    </div>
  );
}

export default App;
