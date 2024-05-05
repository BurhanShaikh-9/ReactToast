import React from 'react'

const CustomHooks = () => {

    const generateRandomId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };


    const getAnimationIn = (position: string) => {
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


    const getType = (type: string) => {
        switch (type) {
            case '1':
                return { img: 'https://react-toast-iota.vercel.app/normal.gif', barColor: '#2b2b2b' }
            case '2':
                return { img: 'https://react-toast-iota.vercel.app/success.gif', barColor: '#00CC66' }
            case '3':
                return { img: 'https://react-toast-iota.vercel.app/Error.gif', barColor: '#FF6347' }
            case '4':
                return { img: 'https://react-toast-iota.vercel.app/warn1.gif', barColor: '#FF6347' }
        }
    }

    return { getType, getAnimationIn, generateRandomId}
}

export default CustomHooks