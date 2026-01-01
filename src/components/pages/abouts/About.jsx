import React from 'react'
import logo from '../../../assets/imgs/logo.png'


const About = () => {
    return (
        <div className='h-[800px] flex flex-col  items-center'>
            <h1 className='text-6xl font-bold text-center py-10' > ABOUT US </h1>
            <div className='bg-white w-[200px] rounded-2xl  h-[15px]'></div>



            <div className='pt-20 pb-50'>



                <p className='text-2xl italic px-190  align-text-bottom  text-justify'>

                    "Our goal is to become a trusted partner for
                    professional media and digital solutions. We
                    are committed to providing consistent quality,
                    innovative ideas, and reliable service—helping
                    brands achieve long-term success and
                    strong digital presence."



                </p>


            </div>





            <img className='w-50 justify-items-end-safe flex' src={logo} alt="" />









        </div>
    )
}

export default About