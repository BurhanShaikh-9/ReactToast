import React, { useEffect, useRef } from 'react'
import crossSvg from '../assets/crossSign.svg';
import { useToastStates } from '../hooks/globalVariable';
import nixButtons from '../hooks/buttonService';

const Toaster1 = ({ position, duration, barPosition, barColor }) => {

  const { hideToast } = nixButtons();
  const { isMsg, isBarColor, isShow, animateInOutDuration } = useToastStates()

  const getAnimationIn = () => {
    switch (position) {
      case 'top-center':
        return 'bounceInTop';
      case 'top-left':
        return 'bounceInLeft';
      case 'top-right':
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
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg" className='nix_toastImg' alt="" />
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

export default Toaster1