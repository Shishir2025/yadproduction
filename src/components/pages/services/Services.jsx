import React from 'react'
import servicesData from './serviceData';
const Services = () => {



    return (
        <div className='bg-white flex flex-col '>
            <h1 className='text-[#333333] text-5xl font-bold text-center pt-10'> SERVICES</h1>

            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 mx-50 space-y-10 pt-10  ">


                {servicesData.map((service) => (
                    <div
                        key={service.id}
                        className="bg-[#333333] flex flex-col justify-center  border-white border-2 w-[400px] h-[300px] space-y-10 text-white rounded-xl p-6 text-center"
                    >
                        {/* Icon Placeholder */}
                        <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-4"></div>

                        <h3 className="text-3xl font-semibold mb-2">
                            {service.title}
                        </h3>

                        <p className="text-shadow-md ">
                            {service.description}
                        </p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Services