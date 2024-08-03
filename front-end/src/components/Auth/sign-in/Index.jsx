import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <>
    <main className='flex justify-center mt-7 '>
        <div className='w-[400px] px-2 md:px-0 flex flex-col gap-7 items-center'>
            <h2 className='text-2xl font-bold tracking-wider'>Sign in to Instagram</h2>
            <button className='border border-black w-full py-3 rounded-lg  flex justify-center gap-2 items-center'>
               <img src="google.svg" alt="" className='w-6 '/><h1 className='text-lg md:text-xl'> Continue with Google</h1></button>
            <p className='text-sm'>or</p>
            <form action="" className='w-full flex flex-col gap-3'>
                <div className='bg-zinc-300 px-3 rounded-lg py-1 pb-1'>
                    <h5 className='font-mono tracking-wider text-sm'>EMAIL</h5>
                    <input type="text" className='bg-transparent tracking-wider w-full h-7 text-lg border-none outline-none' />
                </div>
                <div  className='bg-zinc-300 px-3 rounded-lg py-1 pb-1'>
                    <h5 className='font-mono tracking-wider text-sm'>PASSWORD</h5>
                    <input type="text" className='bg-transparent w-full h-7 text-lg border-none outline-none' />
                </div>
              
                <button className='bg-black text-white text-xl font-semibold py-2 rounded-lg'>Log in</button>
            </form>
            <div className='text-center flex flex-col gap-4'>
                {/* Links */}
                <p className='text-[12px] underline underline-offset-2 text-indigo-500'>Use single sign-on</p>
                <p className='text-[12px] underline underline-offset-2 text-indigo-500'>Reset password</p>
                <p className='text-[12px]'>No account? <Link to={'/register'} className='text-[13px] underline  underline-offset-2 text-blue-600'>create one</Link></p>
                
            </div>
        </div>
    </main>
    </>
  )
}

export default Index