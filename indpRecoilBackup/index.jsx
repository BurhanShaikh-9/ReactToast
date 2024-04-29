import React from 'react'
import Toaster from './toast'
import { RecoilRoot } from 'recoil'

const NixToast = () => {
    return (
        <RecoilRoot>
            <Toaster />
        </RecoilRoot>
    )
}

export default NixToast