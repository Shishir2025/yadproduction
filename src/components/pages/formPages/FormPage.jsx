import React from 'react'

const FormPage = () => {
    return (
        <div className='flex flex-col my-10 justify-center'>

            <div className='bg-white'> <br /> <br /> <br /></div>

            <div className='flex flex-col items-center space-y-10'>
                <h1 className='text-6xl pt-10 font-bold text-center'> Request a Quote !
                </h1>


                <div className='bg-white w-[200px] rounded-2xl h-[15px]'></div>
            </div>

            <div className=" bg-[#33333] py-25">



                <form className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">

                    {/* LEFT SIDE */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-white mb-2">Full Name:</label>
                            <input
                                type="text"
                                placeholder="full name"
                                className="w-full bg-white px-4 text-black py-3 rounded-md outline-none placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-white mb-2">Email:</label>
                            <input
                                type="email"
                                placeholder="e-mail"
                                className="w-full  bg-white  px-4 py-3 text-black rounded-md outline-none placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-white mb-2">Phone/Mobile</label>
                            <input
                                type="text"
                                placeholder="contact "
                                className="w-full bg-white  px-4 py-3 text-black rounded-md outline-none placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="block text-white mb-2">Message</label>
                            <textarea
                                placeholder="message"
                                rows="6"
                                className="w-full h-7/8  bg-white  px-4 py-3 rounded-md outline-none resize-none placeholder-gray-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-white cursor-pointer  text-3xl  text-gray-800 py-3 rounded-md font-medium hover:bg-gray-200 transition"
                        >
                            Submit Form
                        </button>
                    </div>

                </form>





            </div>






        </div>
    )
}

export default FormPage