import React from 'react'
import logo from '../../../assets/imgs/logo.png'
import ClientInfo from '../../clientDesplay/ClientInfo'
import Services from '../services/Services'
import About from '../abouts/About'
import FormPage from '../formPages/FormPage'



const Home = () => {
    return (
        <div  >




            <div className='py-60'>
                <div className='flex w-full  justify-evenly  '>

                    <div className='w-1/2 flex flex-col items-center'  >
                        <div className=' pt-' > <img src={logo} alt="" />   </div>
                        <div className='pt-10'>
                            <p> एक पटक जोडिएको सम्बन्ध, सधैका लागि </p>
                            <h1 className='text-5xl font-bold'>Click Once. <span className=' text-gray-700 rounded-2xl bg-white px-5 '> touch</span>
                                <br />
                                Remember Forever.
                            </h1>

                        </div>



                    </div>


                    <div className='w-1/2 h-full flex flex-col items-center' >
                        <h2 className='text-4xl font-bold pt-                '>turned into unforgettable
                            <br />
                            <span className='text-5xl'> visual experiences. </span>
                        </h2>


                        <p className='w-2/4 text-2xl font-thin pt-5'> We are a creative media production team dedicated to capturing stories with precision and passion.
                            <br /> Whether for news, brands, events, or personal projects, we bring your vision to life with quality you can trust.    </p>







                    </div>

                </div>
            </div>




            <ClientInfo />
            <Services />
            <About />
            <FormPage />

        </div>


    )
}

export default Home