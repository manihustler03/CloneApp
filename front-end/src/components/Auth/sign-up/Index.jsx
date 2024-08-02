import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <>
    <main className='flex justify-center mt-7 mb-4 '>
        <div className='w-full px-2 md:px-0 sm:w-[400px] md:w-[400px] flex flex-col gap-7 items-center'>
            <h2 className='text-2xl font-bold tracking-wider '>Sign up to Instagram</h2>
            <button className='border border-black w-full py-3 rounded-lg text-xl flex justify-center gap-2 items-center'>
               <img src="google.svg" alt="" className='w-6 '/><h1> Continue with Google</h1></button>
            <p className='text-sm'>or</p>
            <form action="" className='w-full flex flex-col gap-5 md:gap-3'>
                <div className='bg-zinc-300 px-3 rounded-lg py-1 pb-1'>
                    <h5 className='font-mono tracking-wider text-sm'>EMAIL</h5>
                    <input type="text" className='bg-transparent tracking-wider w-full h-7 text-lg border-none outline-none' />
                </div>
                <div  className='bg-zinc-300 px-3 rounded-lg py-1 pb-1'>
                    <h5 className='font-mono tracking-wider text-sm'>PASSWORD</h5>
                    <input type="text" className='bg-transparent w-full h-7 text-lg border-none outline-none' />
                </div>
                <div  className='bg-zinc-300 px-3 rounded-lg py-1 pb-1'>
                    <h5 className='font-mono tracking-wider text-sm'>CONFIRM PASSWORD</h5>
                    <input type="text" className='bg-transparent w-full h-7 text-lg border-none outline-none' />
                </div>
                <div className='flex gap-2 pl-1 mt-3'>
                    <input className='w-5 rounded-lg' type="checkbox" name="" id="" />
                    <label className='font-mono'  htmlFor="">Apply terms and conditions </label>
                </div>
                <button className='bg-black text-white text-lg font-medium py-2.5 rounded-lg tracking-widest'>Create account</button>
            </form>
            <div className='flex flex-col gap-3'>
                <p className='text-[11px] tracking-wider  text-gray-500 text-center'> By clicking "Create account" or "Continue with Google", you agree to the Our <span className='text-[#5551ff]'>TOS</span> and <span className='text-[#5551ff]'>Privacy Policy.</span></p>
                <p  className='text-[11px]  tracking-wider text-gray-500 text-center'>*By opting in, you are consenting to receive product, service and events updates from Us. You can unsubscribe at any time.</p>
            </div>
            <div className='text-center flex flex-col gap-4'>
                {/* Links */}
                <p className='text-sm md:text-[12px] underline underline-offset-2 text-indigo-500 cursor-pointer'>Use single sign-on</p>
                <p className='text-sm md:text-[12px] cursor-pointer'>Already having account? <Link to={'/'} className='text-[12px] underline underline-offset-2 text-indigo-500'>Log in</Link></p>
            </div>
        </div>
    </main>
    </>
  )
}

export default Index