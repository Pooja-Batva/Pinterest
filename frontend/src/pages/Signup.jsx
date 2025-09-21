import React from 'react'

function Signup() {
  return (
    <div className='flex width-full min-h-screen justify-center items-center bg-gray-100'>
        <div className='w-full max-w-md bg-white rounded-xl p-8 md:p-20 shadow-lg'>
            <div className='flex flex-col items-center mb-6'>
                 <svg aria-labelledby="fullpage-modal-pinterest-logo" height="50" role="img" viewBox="-3 -3 82 82" width="50"><title>Pinterest logo</title><circle cx="38" cy="38" fill="white" r="40"></circle><path d="M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z" fill="red" fillRule="evenodd"></path></svg>
                <h2 className='text-3xl font-bold text-center'>Log in to see more</h2>
            </div>
            <form className='mt-6 space-y-4'>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        placeholder='Username'
                        className='px-4 py-2 w-full mt-1 text-gray-700 border rounded-lg focus:ring focus:ring-blue-500'
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        placeholder='Email'
                        className='px-4 py-2 w-full mt-1 text-gray-700 border rounded-lg focus:ring focus:ring-blue-500'
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        placeholder='Password'
                        className='px-4 py-2 w-full mt-1 text-gray-700 border rounded-lg focus:ring focus:ring-blue-500'
                    />
                </div>
                <button
                    type='submit'
                    className='w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300'
                >
                    Sign Up
                </button>
            </form>
        </div>
    </div>
  )
}

export default Signup