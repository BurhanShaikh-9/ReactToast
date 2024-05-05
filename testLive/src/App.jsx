import React, { useEffect } from 'react'
import {NixToast} from 'nix-toast';
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

      <NixToast type="1" position="top-center" duration="500" barPosition="bar-bottom" barColor="#13bf19"/>
   </React.Fragment>
  )
}

export default App
