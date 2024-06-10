import React from 'react';
import Login from './api/login';

export default function LoginPage() {
  
  return (
    <div className="flex h-screen w-dvh items-center">
        <div className='flex-column w-full place-content-center justify-self-center'>
            <div className='flex place-items-center justify-center h-fit'>
                <h1 className='text-6xl mb-4 font-black '>WaitList</h1>
            </div>
            <div className='flex h-fit place-items-center justify-center  w-full'>
                <Login/>
            </div>
        </div>
    </div>
  );
}
