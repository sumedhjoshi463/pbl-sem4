import React from 'react'
import Navbar from '../Componants/Navbar'
// import ControlledCarousel from '../Componants/ControlledCarousel';

import {Fade} from 'react-reveal';


export default function Home() {
    return (
        <div className='bg-gradient-to-r from-slate-900 to-slate-700 w-full h-[100vh] '>
            <div className='pb-5'>
                <Navbar />
            </div>
            
            <div className='text-white '>
                <Fade top>
                    <div className=' justify-center align-center w-[80%] md:w-[60%] mx-auto h-[45vh] mt-[15vh] mb-[8vh]' >
                            <p className='text-4xl md:text-6xl p-5'>You dont need to Go Anywhere Else!</p>
                            <p className='text-xl md:text-3xl p-5'>Your team is one Click away.</p>

                            <div className='mt-5'>
                                <button className='p-6 rounded-full bg-violet-500 hover:bg-violet-800  '>Get Started</button>
                            </div>
                    </div>
                </Fade>
                <Fade bottom >
                <div className='p-4'>
                    <p className='text-xl md:text-3xl'>
                        Invite your teammates and work together.
                    </p>
                </div>
                </Fade>
            </div>
            
        </div>
    )
}
