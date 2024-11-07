import React, { useState } from 'react'

const Login = () => {
  const [input, setInput] = useState({
    email : '',
    password : ''
  })

  const handleInput = (e) => {
    const {name, value} = e.target;
    setInput((first)=>({
      ...first, [name] : value
    }))
  }

  const handleSubmit = () => {
    console.log(`Email : ${input.email}`);
    console.log(`Password : ${input.password}`);
  }

  return (
    <div className='mt-16'>
      <div className='px-72 py-5'>
        <img className='w-20' src="./Assets/imgs/carbon_logo-slack.png" alt="" />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[#C1C242] font-medium text-4xl mb-7'>Sign in to ChawkBazar</h1>
        <div className='flex gap-4'>
          <img className='cursor-pointer' src="./Assets/imgs/facebook.png" alt="" />
          <img className='cursor-pointer' src="./Assets/imgs/gmail.png" alt="" />
          <img className='cursor-pointer' src="./Assets/imgs/linkedIn.png" alt="" />
        </div>
        <p className='text-xl font-normal mt-4 cursor-pointer mb-6'>or use ur email account</p>
        <input name='email' value={input.email} onChange={handleInput} className='bg-[#CCCD214F] w-[426px] h-[55px] px-5 rounded-md mb-6' type="email" placeholder='Enter Your Email' />
        <input name='password' value={input.password} onChange={handleInput} className='bg-[#CCCD214F] w-[426px] h-[55px] px-5 rounded-md' type="password" placeholder='Enter Your Passsword' />
        <p className='text-xl font-normal cursor-pointer mt-7 underline'>Forgot your password?</p>
        <button onClick={handleSubmit} className='bg-[#BDBE3E] w-[250px] h-[55px] px-5 rounded-md mt-7 font-medium text-2xl'>Sign In</button>
      </div>
    </div>
  )
}

export default Login
