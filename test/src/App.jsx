import React, { useEffect } from 'react'
import { NixToast } from 'nix-toast';
import { UseNixToast } from 'nix-toast'



function App() {

  const { nixToast, nixSuccess, nixError, nixWarn } = UseNixToast();

  // useEffect(()=>{
  //   nixError('errr')
  // },[])

  return (
    <React.Fragment>
      <button onClick={() => nixError('hey')}>Trigger Error</button>
      <button onClick={() => nixSuccess('lol')}>Trigger Success</button>
      <button onClick={() => nixToast('normal toast')}>Normal toast</button>
      <button onClick={() => nixWarn('Warning 1')}>Trigger Warn</button>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <path fill="#4caf50" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"></path>
      </svg>
      <NixToast type="1" position="top-center" backgroundColor='white' duration="500" barPosition="bar-bottom" barColor="#13bf19" />
    </React.Fragment>
  )
}

export default App
