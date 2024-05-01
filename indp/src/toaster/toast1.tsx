import React, { useEffect, useRef } from 'react'
import UseToastStates from '../hooks/globalVariable';
import NixButtons from '../hooks/buttonService';
import { ToasterProps } from '../types';


const crossSvg = 'https://react-toast-iota.vercel.app/crossSign.svg'



const Toaster: React.FC<ToasterProps> = ({ position, duration, barPosition, barColor, backgroundColor }) => {

  const { hideToast } = NixButtons();
  const { isMsg, isBarColor, isShow, animateInOutDuration, isImg, isBackgroundColor } = UseToastStates()

  const getAnimationIn = () => {
    switch (position) {
      case 'top-center':
        return 'bounceInTop';
      case 'top-left':
      case 'bottom-left':
        return 'bounceInLeft';
      case 'top-right':
      case 'bottom-right':
        return 'bounceInRight';
      case 'bottom-center':
        return 'bounceInCenterBot';
      default:
        return 'bounceInTop';
    }
  };

  const animationStyle = { animation: `durationAnimation ${duration}s linear forwards`, background: barColor ? barColor : isBarColor };
  const animationContainerOpen = { animation: `${isShow.triggerAnimation ? getAnimationIn() : 'bounceOut'} .${animateInOutDuration}s ease forwards` };
  const nixToastBackgroundColor = { backgroundColor: backgroundColor ? backgroundColor:  isBackgroundColor}

  return (
    <React.Fragment>
      <div className={`nix_toastMainContainer nix_${position}`} style={animationContainerOpen}>
        <div className="nix_toastInner" style={nixToastBackgroundColor}>
          <div className={`nix_toastDuration nix_${barPosition ? barPosition : 'bar-top'}`} style={animationStyle}></div>
          <div className='nix_inContent'>
            <button className='nix_cancelToast' onClick={() => hideToast()}>
              <img src={crossSvg} alt="" className='' />
            </button>
            <div>
              <img src={isImg} className='nix_toastImg' alt="" />
            </div>
            <div>
              {isMsg}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Toaster