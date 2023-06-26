import React from 'react'

function Login() {
    return (
        <div>
            <div className='w-full h-screen flex items-center justify-center'>
                <div className='w-3/5 h-3/5 flex shadow-xl rounded-lg'>
                    <div className='w-1/2 bg-white px-10 pt-10 rounded-l-xl'>
                        <div className='text-3xl font-light'>Sign In</div>
                        <label className='block mt-6'>
                            <span className='text-lg font-bold mt-5'>USERNAME</span>
                            <input type='email' name='email' placeholder='Username' className='bg-gray-100 w-full h-10 mt-1 px-3 focus:outline-none rounded-2xl' />
                        </label>
                        <label className='block mt-6'>
                            <span className='text-lg font-bold mt-5'>PASSWORD</span>
                            <input type='email' name='email' placeholder='Password' className='bg-gray-100 w-full h-10 mt-1 px-3 focus:outline-none rounded-2xl' />
                        </label>
                        <button className='rounded-full w-full h-10 bg-green-400 mt-4 text-white'>Sign In</button>
                        <div className='text-xl flex text-green-400 mt-3 items-center'>
                            <ion-icon name="checkbox"></ion-icon>
                            <p className='text-sm ml-1'>Remember Me</p>
                            <div className='flex-grow'></div>
                            <a href='' className='text-sm ml-1 text-black'>Forgot Password</a>
                        </div>
                    </div>
                    <div className='w-1/2 bg-green-400 rounded-r-xl'></div>
                </div>
            </div>
        </div>
    )
}

export default Login
