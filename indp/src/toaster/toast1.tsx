import React, { useEffect, useRef } from 'react'
import  UseToastStates  from '../hooks/globalVariable';
import NixButtons from '../hooks/buttonService';
import { ToasterProps } from '../types';


const crossSvg = 'https://react-toast-iota.vercel.app/crossSign.svg'
const succImg = 'https://react-toast-iota.vercel.app/success.gif'
const errorImg = 'https://react-toast-iota.vercel.app/Error.gif'
const warningImg = 'https://react-toast-iota.vercel.app/warn1.gif'


const Toaster: React.FC<ToasterProps> = ({ position, duration, barPosition, barColor }) => {

  const { hideToast } = NixButtons();
  const { isMsg, isBarColor, isShow, animateInOutDuration } = UseToastStates()

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

  const animationStyle = { animation: `durationAnimation ${duration}s linear forwards`, background: isBarColor ? isBarColor : barColor };
  const animationContainerOpen = { animation: `${isShow.triggerAnimation ? getAnimationIn() : 'bounceOut'} .${animateInOutDuration}s ease forwards` };


  return (
    <React.Fragment>
      <div className={`nix_toastMainContainer nix_${position}`} style={animationContainerOpen}>
        <div className="nix_toastInner">
          <div className={`nix_toastDuration nix_${barPosition ? barPosition : 'bar-top'}`} style={animationStyle}></div>
          <div className='nix_inContent'>
            <button className='nix_cancelToast' onClick={() => hideToast()}>
              <img src={crossSvg} alt="" className='' />
            </button>
            <div>
              <img src={succImg} className='nix_toastImg' alt="" />
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