import React from 'react'

function Navigation() {
    return (
        <nav className='max-w-4xl h-[100px] fixed left-0 right-0 px-3 mx-auto top-2 md:top-4 z-50'>
            <div className='rounded-full backdrop-blur-sm flex justify-between items-center  shadow-[0px_0px_0px_0.5px_#2d3748] bg-[#ffffff06] px-5 py-4 mt-2'>
                <div className='flex items-center'>
                    <div className='bg-white text-black rounded-lg p-3 size-8 flex items-center justify-center font-bold text-2xl' style={{fontFamily: "var(--font-marck)"}}>
                        P
                    </div>
                    <h1 className='text-2xl ml-1' style={{fontFamily: "var(--font-marck)"}}>athixo</h1>
                </div>
                <ul className='hidden md:flex'>
                    <li className='inline-block mx-4 cursor-pointer hover:underline'>Home</li>
                    <li className='inline-block mx-4 cursor-pointer hover:underline'>Services</li>
                    <li className='inline-block mx-4 cursor-pointer hover:underline'>Portfolio</li>
                    <li className='inline-block mx-4 cursor-pointer hover:underline'>About</li>
                    <li className='inline-block mx-4 cursor-pointer hover:underline'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation