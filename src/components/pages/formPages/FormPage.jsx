import { useState } from "react";

const FormPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent("New Quote Request");
        const body = encodeURIComponent(
            `Full Name: ${formData.name}
Email: ${formData.email}
Phone/Mobile: ${formData.phone}

Message:
${formData.message}`
        );

        window.location.href = `mailto:yaadproduction.np@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className='flex flex-col my-10 justify-center'>

            <div className='bg-white hidden sm:block'>
                <br /><br /><br />
            </div>

            <div className='flex flex-col items-center space-y-6 sm:space-y-10'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-10 font-bold text-center'>
                    Request a Quote !
                </h1>

                <div className='bg-white w-[120px] sm:w-[160px] md:w-[200px] rounded-2xl h-[10px] sm:h-[12px] md:h-[15px]'></div>
            </div>

            <div className="bg-[#333333] py-10 sm:py-16 md:py-20 px-4">

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-6xl mx-auto"
                >

                    {/* LEFT SIDE */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-white mb-2">Full Name:</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                placeholder="full name"
                                className="w-full bg-white px-4 py-3 text-black rounded-md outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-white mb-2">Email:</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                placeholder="e-mail"
                                className="w-full bg-white px-4 py-3 text-black rounded-md outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-white mb-2">Phone/Mobile:</label>
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                placeholder="contact"
                                className="w-full bg-white px-4 py-3 text-black rounded-md outline-none"
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="block text-white mb-2">Message:</label>
                            <textarea
                                name="message"
                                onChange={handleChange}
                                placeholder="discription"
                                rows="6"
                                className="w-full text-black bg-white px-4 py-3 rounded-md outline-none resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-white cursor-pointer text-xl sm:text-2xl md:text-3xl text-gray-800 py-3 rounded-md font-medium hover:bg-gray-200 transition"
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default FormPage;
