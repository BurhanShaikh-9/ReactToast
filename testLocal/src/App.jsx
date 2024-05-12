import React, { useState } from 'react'
import { NixToast } from 'nix-toast';
import { UseNixToast } from 'nix-toast'



function App() {

  const { nixToast, nixSuccess, nixError, nixWarn } = UseNixToast();
  const [numState, setNumState] = useState(true);
  const numFunc = () => {
    return numState ? 1 : 5
  }
  return (
    <React.Fragment>
      <button onClick={() => nixError('hey', 1)}>Trigger QUICK 1</button>
      <button onClick={() => { nixError('hey', numFunc()); setNumState(!numState) }}>Trigger Error 1 or 5</button>
      <button onClick={() => nixError('hey', 5)}>Trigger Error 5</button>
      <button onClick={() => nixSuccess('lol', 2)}>Trigger Success 4</button>
      <button onClick={() => nixToast('normal toast', 3)}>Normal toast 10</button>
      <button onClick={() => nixWarn('Warning 1', 3)}>Trigger Warn 3</button>

      <NixToast toastType="1" position="top-center" backgroundColor='white'  barPosition="bar-bottom" barColor="#13bf19" />
    </React.Fragment>
  )
}

export default App
