import React from 'react'
import logo from '../../../assets/imgs/logo.png'
import ClientInfo from '../../clientDesplay/ClientInfo'
import Services from '../services/Services'
import About from '../abouts/About.jsx'
import FormPage from '../formPages/FormPage'
import TeamsInfo from '../teams/TeamsInfo.jsx'




const Home = () => {
    return (
        <div  >




            <div className="py-20 md:py-40 lg:py-60 px-4">
                <div className="flex flex-col lg:flex-row w-full items-center justify-evenly gap-16">

                    {/* Left Section */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left">
                        <div>
                            <img src={logo} alt="logo" className="w-32 md:w-40" />
                        </div>

                        <div className="pt-8">
                            <p className="text-base md:text-lg">
                                एक पटक जोडिएको सम्बन्ध, सधैका लागि
                            </p>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
                                Click Once.
                                <span className="text-gray-700 bg-white px-4 py-1 rounded-2xl mx-2 inline-block">
                                    touch
                                </span>
                                <br />
                                Remember Forever.
                            </h1>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            turned into unforgettable
                            <br />
                            <span className="text-3xl md:text-4xl lg:text-5xl">
                                visual experiences.
                            </span>
                        </h2>

                        <p className="w-full md:w-3/4 text-base md:text-lg lg:text-2xl font-light pt-6">
                            We are a creative media production team dedicated to capturing stories
                            with precision and passion.
                            <br />
                            Whether for news, brands, events, or personal projects, we bring your
                            vision to life with quality you can trust.
                        </p>
                    </div>

                </div>
            </div>





            <ClientInfo />
            <Services />
            <TeamsInfo />



            <About />
            <FormPage />

        </div>


    )
}

export default Home