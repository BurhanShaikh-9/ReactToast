import React, { useEffect, useRef } from 'react'

const Toaster1 = ({position, duration, barPosition}) => {

  // useEffect(()=>{

  // },[])
  
  const animationStyle = {
    animation: `durationAnimation ${duration}s linear forwards`,
  };

  return (
    <React.Fragment>
      <div className={`nix_toastMainContainer nix_${position} `} >
        <div className="nix_toastInner">
          <div className={`nix_toastDuration nix_${barPosition ? barPosition : 'bar-top'}`}  style={animationStyle}></div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg" className='nix_toastImg' alt="" />
          </div>
          <div>
            this is your msg
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Toaster1