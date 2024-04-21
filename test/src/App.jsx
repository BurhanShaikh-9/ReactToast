import React from 'react'
import NixToast from '../../indp/toast.jsx'
import useNixToast from '../../indp/hooks/useNixToast.js'



function App() {

  const { nixToast, nixSuccess, nixError, nixWarn } = useNixToast();

  return (
   <React.Fragment>
      <button onClick={() => nixError('hey')}>Trigger Toast</button>

      <NixToast type="1" position="top-center" duration="30" barPosition="bar-bottom" barColor="#13bf19"/>
   </React.Fragment>
  )
}

export default App
