"use client"

import React, { useState } from 'react'
import { SignInFlow } from '../types'
import SignInCard from './sign-in-card'
import SignUpCard from './sign-up-card'

const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>('signIn')
    return (
        <div className='h-full bg-[#5C3B58] flex items-center justify-center '>
            <div className="md:h-auto md:w-[420px]">
                {
                    state === 'signIn' ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />
                }
            </div>
        </div>
    )
}

export default AuthScreen