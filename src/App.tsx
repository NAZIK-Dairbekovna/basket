import React from 'react';
import './App.css';
import Store from "./components/pages/Store";
import Basket from "./components/pages/Basket";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'} element={<Store/>}/>
            <Route path={'/basket'} element={<Basket/>}/>
        </Routes>
    </div>
  );
}

export default App;
