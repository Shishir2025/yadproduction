import React from 'react'

const ClientInfo = () => {
    return (
        <div> <div className="grid h-[400px]  text-center bg-white w-full mx-auto font-sans text-white">
            {/* Title */}
            <h2 className="text-5xl mt-10 text-gray-800 font-bold uppercase mb-6">Our Clients</h2>

            {/* Box with dashed borders */}
            <div className='bg-[#333333] py-3 '>
                <div className="border-t-8 border-b-8 border-dashed border-white py-20 px-10 flex flex-wrap justify-center items-center gap-8">





                    <div className="w-24 h-14 bg-gray-700 rounded-md flex justify-center items-center text-gray-400 text-sm">
                        Logo 1
                    </div>
                    <div className="w-24 h-14 bg-gray-700 rounded-md flex justify-center items-center text-gray-400 text-sm">
                        Logo 2
                    </div>
                    <div className="w-24 h-14 bg-gray-700 rounded-md flex justify-center items-center text-gray-400 text-sm">
                        Logo 3
                    </div>
                    <div className="w-24 h-14 bg-gray-700 rounded-md flex justify-center items-center text-gray-400 text-sm">
                        Logo 4
                    </div>






                </div>



            </div>
        </div>

        </div>
    )
}

export default ClientInfo