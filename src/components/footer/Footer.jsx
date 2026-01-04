import React from 'react'

const Footer = () => {
    return (
        <div>

            <div className='bg-white hidden sm:block'>
                <br /><br /><br />
            </div>

            <div className='
    flex
    flex-col
    lg:flex-row
    pb-5
    justify-center
    py-10
    gap-6
    sm:gap-10
    lg:gap-20
    px-4
  '>
                <div className='w-full sm:w-[320px] md:w-[400px] lg:w-[450px] h-[200px] sm:h-[220px] lg:h-[250px] rounded-2xl bg-white'></div>
                <div className='w-full sm:w-[320px] md:w-[400px] lg:w-[450px] h-[200px] sm:h-[220px] lg:h-[250px] rounded-2xl bg-white'></div>
                <div className='w-full sm:w-[320px] md:w-[400px] lg:w-[450px] h-[200px] sm:h-[220px] lg:h-[250px] rounded-2xl bg-white'></div>
            </div>

            <p className='text-center text-sm sm:text-base pb-4'>
                ©2025 YadProduction. All Rights Reserved.
            </p>

        </div>

    )
}

export default Footer