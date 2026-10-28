import { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    const mailtoLink = `mailto:yaadproduction.np@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-6xl mx-auto">
      <div className="space-y-6">
        <div>
          <label className="block text-white mb-2">Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
            value={formData.email}
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
            value={formData.phone}
            onChange={handleChange}
            placeholder="contact"
            className="w-full bg-white px-4 py-3 text-black rounded-md outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <label className="block text-white mb-2">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Vision & Task Details"
            rows="6"
            className="w-full text-black bg-white px-4 py-3 rounded-md outline-none resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-white cursor-pointer text-xl sm:text-2xl md:text-3xl text-gray-800 py-3 rounded-md font-medium hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormPage;
