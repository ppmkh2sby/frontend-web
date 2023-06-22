import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-blue-600 hover:bg-blue-700 duration-500 text-white text-xl font-bold py-2 px-6 md:ml-8 rounded duration-500'>
        {props.children}
    </button>
  )
}

export default Button