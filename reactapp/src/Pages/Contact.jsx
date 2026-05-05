import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  console.log(formData);
  
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
   if(formData.name==="Muntazir" && formData.email==="muntazirma21@gmail.com"){
    alert("login sucessfully")
   }
   else{
    alert("username and password not match")
   }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen py-16 px-6">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white">
          Contact Us 📩
        </h1>
        <p className="text-gray-400 mt-4">
          We'd love to hear from you! Send us your message.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="text-gray-300 text-sm">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-300 text-sm">Your Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
          >
            Send Message 🚀
          </button>

        </form>
      </div>

    </div>
  );
};

export default Contact;