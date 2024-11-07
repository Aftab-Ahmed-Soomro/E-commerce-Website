import React, { useState } from 'react'

const Logup = () => {
    const [input, setInput] = useState({
        name : '',
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
        console.log(`Name : ${input.name}`)
        console.log(`Email : ${input.email}`)
        console.log(`Password : ${input.password}`)
    }

  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[#C1C242] font-medium text-4xl mb-7 mt-10'>Create Account</h1>
        <div className='flex gap-4'>
          <img className='cursor-pointer' src="./Assets/imgs/facebook.png" alt="" />
          <img className='cursor-pointer' src="./Assets/imgs/gmail.png" alt="" />
          <img className='cursor-pointer' src="./Assets/imgs/linkedIn.png" alt="" />
        </div>
        <p className='text-xl font-normal mt-4 cursor-pointer mb-6'>or use ur email account</p>
        <input name='name' value={input.name} onChange={handleInput} className='bg-[#CCCD214F] w-[426px] h-[55px] px-5 rounded-md mb-6' type="text" placeholder='Enter Your Name' />
        <input name='email' value={input.email} onChange={handleInput} className='bg-[#CCCD214F] w-[426px] h-[55px] px-5 rounded-md mb-6' type="email" placeholder='Enter Your Email' />
        <input name='password' value={input.password} onChange={handleInput} className='bg-[#CCCD214F] w-[426px] h-[55px] px-5 rounded-md' type="password" placeholder='Enter Your Password' />
        <p className='text-xl font-normal cursor-pointer mt-7 underline'>Forgot your password?</p>
        <button onClick={handleSubmit} className='bg-[#BDBE3E] w-[250px] h-[55px] px-5 rounded-md mt-7 font-medium text-2xl'>Sign In</button>
      </div>
    </div>
  )
}

export default Logup
