import React from 'react'
import logo from '../../../assets/imgs/logo.png'


const About = () => {
    return (
        <div className='min-h-[800px] flex flex-col items-center px-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center py-10'>
                ABOUT US
            </h1>

            <div className='bg-white w-[120px] sm:w-[160px] md:w-[200px] rounded-2xl h-[10px] sm:h-[12px] md:h-[15px]'></div>


            <div className='pt-10 sm:pt-16 md:pt-20 pb-20 sm:pb-32'>


                <p className='
                
      text-base sm:text-lg md:text-xl lg:text-2xl
      italic
      px-4 sm:px-12 md:px-24 lg:px-40 xl:px-56
      text-justify
    '>
                    "Our goal is to become a trusted partner for
                    <br />
                    professional media and digital solutions.
                    <br />
                    We are committed to providing consistent<br /> —  quality,
                    innovative ideas, and reliable service <br /> — helping
                    brands achieve long-term success and <br />
                    strong digital presence."
                </p>
            </div>

            <img
                className='w-24 sm:w-32 md:w-40 lg:w-50'
                src={logo}
                alt=""
            />
        </div>

    )
}

export default About