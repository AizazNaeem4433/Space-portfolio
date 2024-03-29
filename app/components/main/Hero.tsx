import React from 'react'
import Herocontent from '../sub/Herocontent'

const Hero = () => {
  return (
    <div className='flex flex-col h-full w-full'>
        <video
        autoPlay
        muted
        loop
        className='rotate 180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'
        >
            <source 
            src= '/blackhole.webm' type='video/webm'/>
        </video>
<Herocontent/>
    </div>
  )
}

export default Hero