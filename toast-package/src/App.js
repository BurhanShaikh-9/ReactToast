import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import NixToast from './components/toast';

function App() {


  return (
    <React.Fragment>
    <NixToast type="1" position="top-center" duration="3" barPosition="bar-bottom"/>


    <button>Trigger Toast</button>
  </React.Fragment>
  );
}

export default App;
