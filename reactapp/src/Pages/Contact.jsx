import React, { useState } from "react";
import {
  Mail,
  Phone,
  User,
  Link,
  Code,
  MessageCircle,
} from "lucide-react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message Sent Successfully!");
  };

  return (

    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-[#e0f2fe] via-[#fdf4ff] to-[#fef9c3]">

      <div className="w-full max-w-6xl grid md:grid-cols-2 rounded-[35px] overflow-hidden shadow-2xl backdrop-blur-xl bg-white/60 border border-white/40">

        {/* ================= LEFT SIDE ================= */}

        <div className="p-10 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white relative overflow-hidden">

          {/* glow */}
          <div className="absolute w-72 h-72 bg-pink-400/20 rounded-full -top-10 -left-10 blur-3xl"></div>

          <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full bottom-0 right-0 blur-3xl"></div>

          <div className="relative z-10">

            <p className="uppercase tracking-[4px] text-sm text-white/70 mb-3">
              Contact Me
            </p>

            <h2 className="text-5xl font-extrabold leading-tight mb-5">
              Let's Build <br /> Something Amazing
            </h2>

            <p className="text-white/80 leading-relaxed text-sm mb-8">
              Passionate web developer creating modern,
              responsive and visually attractive applications
              using React, Tailwind CSS and JavaScript.
            </p>

            {/* info */}

            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md">

                <div className="bg-white/20 p-3 rounded-full">
                  <User size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/70">
                    Full Name
                  </p>

                  <h3 className="font-semibold">
                    Muntazir Mehdi
                  </h3>
                </div>

              </div>


              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md">

                <div className="bg-white/20 p-3 rounded-full">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/70">
                    Email Address
                  </p>

                  <h3 className="font-semibold">
                    muntazirma21@gmail.com
                  </h3>
                </div>

              </div>


              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md">

                <div className="bg-white/20 p-3 rounded-full">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/70">
                    Phone Number
                  </p>

                  <h3 className="font-semibold">
                    +92 3045963153
                  </h3>
                </div>

              </div>

            </div>


            {/* social */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/Muntazir-Coder313"
                className="bg-white/15 hover:bg-white hover:text-purple-600 transition p-4 rounded-2xl"
              >
                <Code size={20} />
              </a>

              <a
                href="https://www.fiverr.com/muntazircoderam"
                className="bg-white/15 hover:bg-white hover:text-pink-600 transition p-4 rounded-2xl"
              >
                <Link size={20} />
              </a>

              <button
                className="bg-white/15 hover:bg-white hover:text-blue-600 transition p-4 rounded-2xl"
              >
                <MessageCircle size={20} />
              </button>

            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="bg-white/70 backdrop-blur-xl p-10 lg:p-14">

          <p className="uppercase tracking-[4px] text-sm text-purple-500 mb-2">
            Send Message
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Get In Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>

              <label className="text-sm font-medium text-gray-700">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                className="w-full mt-2 p-4 rounded-2xl border border-gray-200 bg-white/80 outline-none focus:ring-2 focus:ring-purple-400 transition"
              />

            </div>


            <div>

              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full mt-2 p-4 rounded-2xl border border-gray-200 bg-white/80 outline-none focus:ring-2 focus:ring-pink-400 transition"
              />

            </div>


            <div>

              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                onChange={handleChange}
                className="w-full mt-2 p-4 rounded-2xl border border-gray-200 bg-white/80 outline-none focus:ring-2 focus:ring-blue-400 transition"
              />

            </div>


            <div>

              <label className="text-sm font-medium text-gray-700">
                Message
              </label>

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                onChange={handleChange}
                className="w-full mt-2 p-4 rounded-2xl border border-gray-200 bg-white/80 outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
              ></textarea>

            </div>


            <button
              type="submit"
              className="w-full py-4 rounded-2xl text-white font-semibold text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:scale-[1.02] transition duration-300 shadow-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;