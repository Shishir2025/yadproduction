import React from 'react'
import servicesData from './serviceData';
const Services = () => {



    return (
        <div className='bg-white flex flex-col pb-15'>
            <h1 className='text-[#333333] text-3xl sm:text-4xl lg:text-5xl font-bold text-center pt-10'>
                SERVICES
            </h1>

            <div className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    px-4 sm:px-8 lg:px-16
    gap-y-10
    pt-10
    place-items-center
  ">
                {servicesData.map((service) => (
                    <div
                        key={service.id}
                        className="
          bg-[#333333]
          flex flex-col
          justify-center
          border-white border-2
          w-full
          max-w-[400px]
          h-auto sm:h-[300px]
          space-y-6 sm:space-y-10
          text-white
          rounded-xl
          p-6
          text-center
        "
                    >
                        {/* Icon Placeholder */}
                        <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-4"></div>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
                            {service.title}
                        </h3>

                        <p className="text-sm sm:text-base text-shadow-md">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Services