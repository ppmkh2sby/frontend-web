import React from 'react';
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/login')} className='bg-green-400 hover:bg-green-500 duration-500 text-white text-xl font-bold py-2 px-6 md:ml-8 rounded duration-500'>
        {props.children}
    </button>
  )
}

export default Button