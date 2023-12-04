import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-blue-100 flex justify-center items-center  px-8'>
        <form method='POST' action="https://getform.io/f/8b4182dd-7b30-4ad8-8913-9eddd4633ae9" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-[#ef7e7e] text-black-300'>Contact:</p>
                <p className='text-black-300 text-3xl py-4'>Shoot me an email-avatapallivishnu@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] text-3xl p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] text-3xl' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] text-3xl p-2' name="message" rows="5" placeholder='Message'></textarea>
            <button className='text-black-300 border-2 text-3xl hover:bg-blue-300 hover:border-blue-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact