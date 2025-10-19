import React, { useState } from 'react'
import welcomeimg from '../assets/welcomeimg.png'
import Login from './Login'
import Signup from './Signup'

function HeroOne() {
    const [showSignup, setShowSignup] = useState(false);

    return (
        <div className='flex w-full h-screen'>
            <img src={welcomeimg} alt="image" className='absolute w-full h-full object-cover sm:hidden md:block' />
            <div className='absolute w-full h-full z-10 p-4 bg-black opacity-65'></div>
            <div className='z-20 ml-20 mr-20 flex flex-col sm:flex-row'>
                <h1 className=' text-white text-4xl md:text-6xl font-bold mb-4 w-1/2 flex items-center pr-20'>Log in to get your ideas</h1>
                <div className='flex justify-flex-end bg-white h-100vh'>
                    {!showSignup ? (
                        <Login onSignUpClick={() => setShowSignup(true)} />
                    ) : (
                        <Signup onClose={() => setShowSignup(false)} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeroOne