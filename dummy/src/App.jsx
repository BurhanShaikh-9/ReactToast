import React from 'react'; // Import React without destructuring
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useRecoilState, useRecoilValue } from 'recoil'; // Import `useRecoilState` hook
import {toastVisibilityAtom, toastVisibilityShow  } from './variable/globalVariable'; // Import atoms/selectors

function App() {
  const [isShow, setIsShow] = useRecoilState(toastVisibilityAtom); // Use `useRecoilState` with `toastVisibilityShow`
  const showing = useRecoilValue(toastVisibilityShow); 
  console.log(isShow, 'sjj')

  return (
    <React.Fragment>
      <button onClick={() => setIsShow(!isShow)}>Clicked</button> 
      <p>Toast Visibility: {isShow ? 'Visible' : 'Hidden'}</p>
      <p>showing:{showing}</p>
      {/* <p>Default:{toastVisibilityDefault}</p> */}
    </React.Fragment>
  );
}

export default App;