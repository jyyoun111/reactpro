import React from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import Info from './Info';
import ArrayFunc from './ArrayFunc';
import SimpleMenu from './SimpleMenu';
import MateEx1 from'./MateEx1';
import './App.css';


function App() {
  return (
    <div >
     <h3>Hooks예제 1</h3>
      <Counter/>
      <h3>Hooks예제 2</h3>
      <Info/> 
      <h3>Hooks예제3</h3>
      <ArrayFunc/>
      <h3>Material UI Test 예제</h3>
     <MateEx1/>
     <h3>SimpleMenu</h3>
     <SimpleMenu/>

    </div>
  );
}

export default App;
