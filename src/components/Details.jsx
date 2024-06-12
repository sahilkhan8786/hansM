import React from 'react'

export default function Details({ text }) {
    return (
        <div className='  px-4 py-5  text-white bg-primary  shadow-lg shadow-black/75 absolute top-2 left-2 z-20'>
            <h1 className='text-center w-ful text-xl mb-5 sm:text-xl' >Hover on model to See description</h1>
            <h1 className='text-center w-full sm:text-xl'>
                {text}
            </h1>
        </div>
    )
}
