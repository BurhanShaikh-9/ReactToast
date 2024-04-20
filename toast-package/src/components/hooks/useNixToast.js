

const useNixToast = () => {
  

    const triggerToast = (text) =>{
      return {isShowToast: true, isMsg:text}
    }

  return {triggerToast}
}

export default useNixToast