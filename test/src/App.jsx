import React, { useEffect } from 'react'
import NixToast from '../../indp/toast.jsx'
import useNixToast from '../../indp/src/hooks/useNixToast.js'



function App() {

  const { nixToast, nixSuccess, nixError, nixWarn } = useNixToast();

  // useEffect(()=>{
  //   nixError('errr')
  // },[])

  return (
   <React.Fragment>
      <button onClick={() => nixError('hey')}>Trigger Error</button>
      <button onClick={() => nixSuccess('lol')}>Trigger Success</button>

      <NixToast type="1" position="top-right" duration="500" barPosition="bar-bottom" barColor="#13bf19"/>
   </React.Fragment>
  )
}

export default App
