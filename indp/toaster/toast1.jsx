import React, { useEffect, useRef } from 'react'
import crossSvg from '../assets/crossSign.svg';

const Toaster1 = ({ position, duration, barPosition, barColor }) => {



  const animationStyle = { animation: `durationAnimation ${duration}s linear forwards`, background: barColor };



  return (
    <React.Fragment>
      <div className={`nix_toastMainContainer nix_${position} `} >
        <div className="nix_toastInner">
          <div className={`nix_toastDuration nix_${barPosition ? barPosition : 'bar-top'}`} style={animationStyle}></div>
          <div className='nix_inContent'>
            <button className='nix_cancelToast'>
              <img src={crossSvg} alt="" className='' />
            </button>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg" className='nix_toastImg' alt="" />
            </div>
            <div>
              this is your msgssddddddd
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Toaster1