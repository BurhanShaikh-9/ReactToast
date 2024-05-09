import React, { useEffect, useState } from 'react'
import UseToastStates from '../hooks/globalVariable';
import { ToasterProps } from '../types';
import CustomHooks from '../hooks/customHooks';


const crossSvg = 'https://react-toast-iota.vercel.app/crossSign.svg'



const Toaster: React.FC<ToasterProps> = ({ id, toastImg, type, msg, position, duration, barPosition, barColor, backgroundColor }) => {
  const { animateInOutDuration, isQueue, setIsQueue } = UseToastStates()

  const { getType, getAnimationIn } = CustomHooks()

  const [defaultBarClr, setDefaultBarClr] = useState<string | undefined>(!barColor ? getType(type)?.barColor : barColor);
  const [defaultImg, setDefaultImg] = useState<string | undefined>(!toastImg ? getType(type)?.img : toastImg);
  const [defaultBackClr, setDefaultBackClr] = useState<string | undefined>(!backgroundColor ? backgroundColor : 'white');


  const removeToast = () => {
    const removeItem = isQueue.filter((item) => { return item.id !== id; })
    setIsQueue(removeItem);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast();
    }, duration * 1000);
  
    return () => clearTimeout(timer);
  }, []);



  const animationStyle = { animation: `durationAnimation ${duration}s linear forwards`, background: defaultBarClr };
  const animationContainerOpen = { animation: `${getAnimationIn(position)} .${animateInOutDuration}s ease forwards`, backgroundColor: defaultBackClr };


  return (
    <React.Fragment>
      <div className={`nix_toastMainContainer nix_${position}`} style={animationContainerOpen}>
        <div className="nix_toastInner" >
          <div className={`nix_toastDuration nix_${barPosition ? barPosition : 'bar-top'}`} style={animationStyle}></div>
          <div className='nix_inContent'>
            <button className='nix_cancelToast' onClick={() => removeToast()}>
              <img src={crossSvg} alt="" className='' />
            </button>
            <div>
              <img src={defaultImg} className='nix_toastImg' alt="" />
            </div>
            <div>
              {msg}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Toaster