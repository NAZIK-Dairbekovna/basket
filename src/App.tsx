import React from 'react';
import './App.css';
import Store from "./components/pages/Store";
import Basket from "./components/pages/Basket";

function App() {
  return (
    <div className="App">
      <Store/>
      <Basket/>
    </div>
  );
}

export default App;
