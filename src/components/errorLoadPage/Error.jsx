import { useNavigate } from 'react-router-dom';





const Error = () => {
    const navigate = useNavigate();



    return (
        <div className="bg-[#333333] w-full min-h-screen flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-6xl font-bold text-center mb-6">
                ERROR !!! & <br />

                <span className='text-2xl font-thin'> WE ARE UNDER CONSTRUCTION !!!</span>
            </h1>
            <button className="bg-white text-[#333333] px-6 py-3 font-bold rounded-md text-lg hover:bg-gray-200 transition"
                onClick={() => navigate(-1)} >
                BACK
            </button>
        </div >

    )
}

export default Error